using System.Web;
using System.Web.Optimization;

namespace Cars
{
    public class BundleConfig
    {
        // For more information on Bundling, visit http://go.microsoft.com/fwlink/?LinkId=254725
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/Plugins/jquery-{version}.js",
                        "~/Scripts/Framework/namespace.js"));

            bundles.Add(new ScriptBundle("~/bundles/angular-material").Include(
                        "~/Scripts/Plugins/angular.js",
                        "~/Scripts/Plugins/angular-animate.js",
                        "~/Scripts/Plugins/angular-aria.js",
                        "~/Scripts/Plugins/angular-material.js"));

            bundles.Add(new ScriptBundle("~/bundles/cars").Include(
                        "~/Scripts/Cars.js",
                        "~/Scripts/Home/Index.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryui").Include(
                        "~/Scripts/Plugins/jquery-ui-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/Plugins/jquery.unobtrusive*",
                        "~/Scripts/Plugins/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/Plugins/modernizr-*"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                        "~/Content/angular-material/angular-material.css",
                        "~/Content/font-awesome.css",
                        "~/fonts/RobotoDraft.css",
                        "~/Content/Index.css"));

            bundles.Add(new StyleBundle("~/Content/themes/base/css").Include(
                        "~/Content/themes/base/jquery.ui.core.css",
                        "~/Content/themes/base/jquery.ui.resizable.css",
                        "~/Content/themes/base/jquery.ui.selectable.css",
                        "~/Content/themes/base/jquery.ui.accordion.css",
                        "~/Content/themes/base/jquery.ui.autocomplete.css",
                        "~/Content/themes/base/jquery.ui.button.css",
                        "~/Content/themes/base/jquery.ui.dialog.css",
                        "~/Content/themes/base/jquery.ui.slider.css",
                        "~/Content/themes/base/jquery.ui.tabs.css",
                        "~/Content/themes/base/jquery.ui.datepicker.css",
                        "~/Content/themes/base/jquery.ui.progressbar.css",
                        "~/Content/themes/base/jquery.ui.theme.css"));
        }
    }
}