using Newtonsoft.Json.Linq;
using PuppeteerSharp;
using Spectre.Console;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OneOuchn
{
    public class OneOuchnHelper
    {
        public Dictionary<string, string> CourseList { get; set; } = new Dictionary<string, string>();
        private BrowerHelper BrowerHelper { get; }
        private ConfigureHelper ConfigureHelper { get; }
        public string Cookies { get; set; }

        public StringBuilder NotFinished = new StringBuilder();

        private string Host { get; set; } = "https://lms.ouchn.cn";

        public HttpClientHelper Clinet { get; set; } = new HttpClientHelper();

        public OneOuchnHelper(BrowerHelper browerHelper, ConfigureHelper configureHelper)
        {
            BrowerHelper = browerHelper;
            ConfigureHelper = configureHelper;
        }

        #region 自动化操作
        /// <summary>
        /// 登录国开一网一平台
        /// </summary>
        /// <returns></returns>
        public async Task LoginOuchn()
        {
            await BrowerHelper.MainPage.GoToAsync("http://one.ouchn.cn/");

            var ToLoginButton = await BrowerHelper.MainPage.WaitForXPathAsync("/html/body/header[1]/div/div/div[2]/button/a");
            await ToLoginButton.ClickAsync();
            await IsLoadOk(BrowerHelper.MainPage, "登录");

            var Pages = await BrowerHelper.Browser.PagesAsync();
            foreach (var item in Pages)
            {
                if (item.Url == "about:blank" || item.Url == "http://one.ouchn.cn/")
                {
                    await item.CloseAsync();
                }
                else
                {
                    BrowerHelper.MainPage = item;
                }
            }

            await IsLoadOk(BrowerHelper.MainPage, "用户名密码");
            LogHelper.WriteInfoLine("正在登录...");

            //await MainPage.WaitForNavigationAsync();
            var UserNo = ConfigureHelper.Configure.UserNo;
            var Password = ConfigureHelper.Configure.Password;

            await BrowerHelper.MainPage.TypeAsync("#loginName", UserNo);
            await BrowerHelper.MainPage.TypeAsync("#password", Password);

            var RefserCodeImage = await BrowerHelper.MainPage.WaitForXPathAsync("/html/body/form/div/div[1]/div/div[1]/div[1]/div/div[5]/img[1]");
            await RefserCodeImage.ClickAsync();


            await IsLoadOk(BrowerHelper.MainPage, "用户名密码");
            //var VerifyPhoto = await MainPage.XPathAsync(@"/html/body/form/div/div[1]/div/div[1]/div[1]/div/div[5]/img[1]");
            //var VerifyPhotoSrc = await VerifyPhoto[0].GetPropertyAsync("src");
            //var VerifyPhotoUrl = VerifyPhotoSrc.ToString().Replace("JSHandle:", "");

            //await MainPage.SetRequestInterceptionAsync(false);
            var ImagePaht = Path.Combine(AppDomain.CurrentDomain.BaseDirectory + Guid.NewGuid().ToString() + ".jpg");
            await BrowerHelper.MainPage.ScreenshotAsync(ImagePaht);
            var ImageProess = await ExtentionMethod.OpenImage(ImagePaht);

            LogHelper.WriteInfoLine("请输入图中的验证码 请尽快输入 60秒内有效( 按Enter继续):");
            var PhotoCode = Console.ReadLine();
            ImageProess.Close();
            ImageProess.Dispose();
            File.Delete(ImagePaht);
            await BrowerHelper.MainPage.TypeAsync("#validateCode", PhotoCode);

            var LoginButton = await BrowerHelper.MainPage.WaitForXPathAsync("/html/body/form/div/div[1]/div/div[1]/div[1]/div/div[6]/nobr/input");
            await LoginButton.ClickAsync();

            await BrowerHelper.MainPage.WaitForNavigationAsync();
            await BrowerHelper.MainPage.SetRequestInterceptionAsync(true);
            BrowerHelper.MainPage.Response += MainPage_Response;
            BrowerHelper.MainPage.Request += MainPage_Request;

            var Content = await BrowerHelper.MainPage.GetContentAsync();
            if (Content.Contains("Authentication failed.验证码输入错误或已过期"))
            {
                LogHelper.WriteInfoLine("Authentication failed.验证码输入错误或已过期 输入任意键退出");
                Console.ReadLine();
                Environment.Exit(-1);
                BrowerHelper.Browser.Dispose();
            }

            else
                LogHelper.WriteInfoLine("登录成功");

            await BrowerHelper.MainPage.SetRequestInterceptionAsync(false);
            await BrowerHelper.MainPage.GoToAsync("https://menhu.pt.ouchn.cn/site/ouchnPc/index");
            await IsLoadOk(BrowerHelper.MainPage, "在学课程");

            var ALinks = await BrowerHelper.MainPage.QuerySelectorAllAsync("a");
            ElementHandle ALink = null;
            foreach (var item in ALinks)
            {
                var href = await item.GetPropertyAsync("href");
                if (href.ToString().Replace("JSHandle:", "").Contains("https://lms.ouchn.cn/course/"))
                {
                    ALink = item;
                    //Console.WriteLine(href);
                    break;
                }
            }
            await ALink.ClickAsync();

            Thread.Sleep(5000);
            var Pagess = await BrowerHelper.Browser.PagesAsync();
            foreach (var item in Pagess)
            {
                if (item.Url == "https://menhu.pt.ouchn.cn/site/ouchnPc/index")
                {
                    await item.DisposeAsync();
                }
                else
                    BrowerHelper.MainPage = item;
            }

            Thread.Sleep(1000);

            var Cookies = await BrowerHelper.MainPage.GetCookiesAsync();
            foreach (var item in Cookies)
            {
                this.Cookies += item.Name + "=" + item.Value + ";";
            }
            Clinet.client.DefaultRequestHeaders.Add("cookie", this.Cookies);
            ConfigureHelper.SetCookie(this.Cookies);

            BrowerHelper.Browser.Dispose();
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="list"></param>
        /// <returns></returns>
        public async Task ConsleCourseTable(JToken list)
        {
            var table = new Table();

            // Add some columns
            table.AddColumn("Id");
            table.AddColumn("课程Id");
            table.AddColumn("课程名称");
            table.AddColumn("课程类型");
            table.AddColumn("起始日到结束日");
            table.AddColumn("学期");

            for (int i = 0; i < list.Count(); i++)
            {
                var item = list[i];

                var Name = item["name"].ToString();
                var CourseUrl = item["url"].ToString();
                var CourseId = CourseUrl.Replace("https://lms.ouchn.cn:443/course/", "").Replace("/content", "");
                var Type = item["type"].ToString();
                var Term = item["term"].ToString();
                var Xq = item["xq"].ToString();
                CourseList.Add(Name, CourseId);
                table.AddRow(i.ToString(), CourseId, Name, Type, Term, Xq);
            }

            AnsiConsole.Write(table);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="list"></param>
        /// <returns></returns>
        public async Task ConsleCourseTable(Dictionary<string, string> CrouseList)
        {
            var table = new Table();

            // Add some columns
            table.AddColumn("Id");
            table.AddColumn("课程Id");
            table.AddColumn("课程名称");
            table.AddColumn("进度");
            int i = 1;
            foreach (var item in CrouseList)
            {
                try
                {
                    var StartCompletenessData = await Clinet.GetJObjectAsync(@$"https://lms.ouchn.cn/api/course/{item.Value}/my-completeness");
                    var StrartCompleteness = StartCompletenessData["study_completeness"].ToString() + "%";
                    table.AddRow(i.ToString(), item.Key, item.Value, StrartCompleteness);
                    i++;
                }
                catch
                {
                    CrouseList.Remove(item.Key);
                    continue;
                }
            }

            AnsiConsole.Write(table);
        }

        /// <summary>
        /// cookie检查
        /// </summary>
        /// <returns></returns>
        public async Task<bool> CookieCheck()
        {
            Clinet.client.DefaultRequestHeaders.Add("cookie", ConfigureHelper.Configure.Cookie);
            var Data = await Clinet.GetJObjectAsync("https://lms.ouchn.cn/api/my-courses");
            if (Data == null)
                return true;

            if (Data.ContainsKey("message"))
                return true;
            else
            {
                foreach (var item in Data["courses"])
                {
                    CourseList.Add((string)item["display_name"], (string)item["id"]);
                }
                await ConsleCourseTable(CourseList);
                return false;
            }

        }

        /// <summary>
        /// 是否加载完毕
        /// </summary>
        /// <param name="page"></param>
        /// <param name="condition"></param>
        /// <returns></returns>
        public async Task IsLoadOk(Page Page, string Condition)
        {
            bool IsOk = true;
            while (IsOk)
            {
                await Page.WaitForTimeoutAsync(500);
                string PageContent = await Page.GetContentAsync();
                if (PageContent.Contains(Condition))
                    IsOk = false;
            }
        }
        #endregion

        #region 模拟请求
        /// <summary>
        /// 学习课程
        /// </summary>
        /// <param name="Cookie"></param>
        /// <param name="CourseId"></param>
        /// <returns></returns>
        public async Task LearnCourseId(string CourseId)
        {
            var StartCompletenessData = await Clinet.GetJObjectAsync(@$"https://lms.ouchn.cn/api/course/{CourseId}/my-completeness");
            var StrartCompleteness = StartCompletenessData["study_completeness"].ToString() + "%";

            var CoursesModulesData = await Clinet.GetJObjectAsync(@$"https://lms.ouchn.cn/api/courses/{CourseId}/modules");
            var CoursesModulesModels = CoursesModulesData["modules"].ToString().JsonTo<List<CourseModule>>();
            foreach (var CoursesModulesModel in CoursesModulesModels)
            {
                Thread.Sleep(new Random().Next((ConfigureHelper.Configure.MinSeconds * 1000), (ConfigureHelper.Configure.MinSeconds * 1000)));
                LogHelper.WriteColorLine($"\n=====课程模块：{CoursesModulesModel.name}({CoursesModulesModel.id})=====", ConsoleColor.Blue);
                var LearnActivitieData = await Clinet.GetJObjectAsync(@$"https://lms.ouchn.cn/api/course/{CourseId}/all-activities?module_ids=[{CoursesModulesModel.id}]&activity_types=learning_activities,exams,classrooms");
                var LearnActivitieModels = LearnActivitieData["learning_activities"].ToString().JsonTo<List<LearnActivitie>>();
                foreach (var LearnActivitieModel in LearnActivitieModels)
                {
                    Thread.Sleep(new Random().Next((ConfigureHelper.Configure.MinSeconds * 1000), (ConfigureHelper.Configure.MinSeconds * 1000)));
                    Console.WriteLine($"模块标题：{LearnActivitieModel.title}({LearnActivitieModel.type})完成标准：{LearnActivitieModel.completion_criterion}({LearnActivitieModel.id})");
                    if (LearnActivitieModel.completion_criterion == "查看页面")
                    {
                        await Clinet.PostAsync(@$"https://lms.ouchn.cn/api/course/activities-read/{LearnActivitieModel.id}", "{}");
                        LogHelper.WriteSuccessLine($"模块标题：{LearnActivitieModel.title}({LearnActivitieModel.type}) {LearnActivitieModel.completion_criterion} 完成\n");
                    }
                    else if (LearnActivitieModel.completion_criterion.Contains("需累积观看"))
                    {
                        foreach (var VideoUploadModel in LearnActivitieModel.uploads)
                        {
                            foreach (var item in VideoUploadModel.videos)
                            {
                                await Clinet.PostAsync(@$"https://lms.ouchn.cn/api/course/activities-read/{LearnActivitieModel.id}", new { start = 0, end = item.duration }.ToJson());
                                LogHelper.WriteSuccessLine($"模块标题：{LearnActivitieModel.title} {LearnActivitieModel.completion_criterion} 完成");
                            }
                        }
                    }
                    else if (LearnActivitieModel.completion_criterion.Contains("参考资料附件"))
                    {
                        foreach (var UploadModel in LearnActivitieModel.uploads)
                        {
                            await Clinet.PostAsync(@$"https://lms.ouchn.cn/api/course/activities-read/{LearnActivitieModel.id}", new { upload_id = UploadModel.id }.ToJson());
                            LogHelper.WriteSuccessLine($"模块标题：{LearnActivitieModel.title} {LearnActivitieModel.completion_criterion} 完成");
                        }
                    }
                    else if (LearnActivitieModel.completion_criterion == "访问线上链接")
                    {
                        await Clinet.PostAsync(@$"https://lms.ouchn.cn/api/course/activities-read/{LearnActivitieModel.id}", "{}");
                        LogHelper.WriteSuccessLine($"模块标题：{LearnActivitieModel.title}({LearnActivitieModel.type}) {LearnActivitieModel.completion_criterion} 完成\n");
                    }
                    else if (LearnActivitieModel.completion_criterion == "参与发帖或回帖")
                    {
                        
                        if (LearnActivitieModel.title == "答疑论坛") 
                        {
                            var TopicCategoriesData = await Clinet.GetJObjectAsync(@$"https://lms.ouchn.cn/api/courses/{CourseId}/topic-categories?fields=id,title,activity(id,sort,module_id,syllabus_id,start_time,end_time,is_started,is_closed,data,can_show_score,score_percentage,title,prerequisites,submit_by_group,group_set_id,group_set_name,imported_from),referrer_type&include_group_topic_categories=True");
                            var TopicCategoriesModels = TopicCategoriesData["topic_categories"].ToString().JsonTo<List<TopicCategories>>();
                            foreach (var item in TopicCategoriesModels)
                            {
                                if (item.activity.module_id == LearnActivitieModel.module_id)
                                {
                                    var CategoryId = item.id;
                                    var TopicsData = await Clinet.PostAsyncJObject(@$"https://lms.ouchn.cn/api/topics", new { title = "测试", content = "<p>测试</p>", uploads = new string[] { }, category_id = CategoryId }.ToJson());
                                    LogHelper.WriteSuccessLine($"模块标题：{LearnActivitieModel.title}({LearnActivitieModel.type}) {LearnActivitieModel.completion_criterion} 发帖完成");
                                    var TopicsId = TopicsData["id"].ToString();

                                    LogHelper.WriteSuccessLine($"模块标题：{LearnActivitieModel.title}({LearnActivitieModel.type}) {LearnActivitieModel.completion_criterion} 删除帖子完成\n");
                                    await Clinet.DeleteAsync($"https://lms.ouchn.cn/api/topics/{TopicsId}");
                                }
                                else
                                    continue;
                            }
                        }
                        else
                        {
                            LogHelper.WriteSuccessLine($"模块标题：{LearnActivitieModel.title}({LearnActivitieModel.type}) {LearnActivitieModel.completion_criterion} 不需要发帖 完成\n");
                        }
                    }
                    else
                    {
                        LogHelper.WriteErrorLine($"模块标题：{LearnActivitieModel.title}({LearnActivitieModel.type})完成标准：{LearnActivitieModel.completion_criterion}未完成");
                        LogHelper.WriteErrorLine($"答题或测试暂时完成不了 请手动完成 有题库的可以联系我");
                        LogHelper.WriteErrorLine($"手动完成链接:https://lms.ouchn.cn/course/{CourseId}/learning-activity/full-screen#/exam/{LearnActivitieModel.id}");
                        NotFinished.AppendLine($"课程模块：{CoursesModulesModel.name} 模块标题：{LearnActivitieModel.title}({LearnActivitieModel.type})完成标准：{LearnActivitieModel.completion_criterion}\n地址:https://lms.ouchn.cn/course/{CoursesModulesModel.id}/learning-activity/full-screen#/exam/{LearnActivitieModel.id}\n\n");
                    }
                }
                LogHelper.WriteColorLine($"\n=====课程模块：{CoursesModulesModel.name}({CoursesModulesModel.id})=====", ConsoleColor.Blue);
            }
            var EndCompletenessData = await Clinet.GetJObjectAsync(@$"https://lms.ouchn.cn/api/course/{CourseId}/my-completeness");
            var EndCompleteness = EndCompletenessData["study_completeness"].ToString() + "%";

            LogHelper.WriteSuccessLine($"学习前进度:{StrartCompleteness} 学习后进度:{EndCompleteness}");
        }
        #endregion

        #region 事件
        /// <summary>
        /// 网络请求响应
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private async void MainPage_Response(object? sender, ResponseCreatedEventArgs e)
        {
            var Url = e.Response.Request.Url;
            switch (Url)
            {
                case "https://menhu.pt.ouchn.cn/ouchnapp/wap/user/get-info":
                    {

                        //Console.WriteLine(Cookie);
                        Console.WriteLine(await e.Response.TextAsync());
                        break;
                    }
                case "https://menhu.pt.ouchn.cn/ouchnapp/wap/course/learning-pc":
                    {
                        var Cookie = await BrowerHelper.MainPage.GetCookiesAsync();
                        var ResponseText = await e.Response.TextAsync();
                        var ResponseData = JObject.Parse(ResponseText);
                        //Console.WriteLine(ResponseText);
                        //Console.WriteLine(Cookie);
                        // Create a table
                        var list = ResponseData["d"]["list"];
                        await ConsleCourseTable(list);

                        break;
                    }
            }
            if (Url.Contains("lms.ouchn.cn"))
            {
                //Console.WriteLine(await e.Response.TextAsync());
            }
        }

        /// <summary>
        /// 网络请求
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void MainPage_Request(object? sender, RequestEventArgs e)
        {

            //Console.WriteLine(e.Request.Url);
            //Console.WriteLine(e.Request.Method);
            //Console.WriteLine(e.Request.Headers);
        }
        #endregion
    }
}