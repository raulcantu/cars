using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Cars.Controllers
{
    public class SharedController : Controller
    {
        //
        // GET: /Shared/

        #region Constructor
        public SharedController(): base()
        {
        }
        #endregion

        public ActionResult Index()
        {
            return View();
        }
        public ActionResult _InitScript(string initString)
        {
            var _initString = new List<string>();
            _initString.Add(initString);
            return PartialView(_initString);
        }
    }
}
