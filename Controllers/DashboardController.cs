using Graficas.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Graficas.Controllers
{
    public class DashboardController : Controller
    {
        // GET: Dashboard
        public ActionResult Index()
        {
            return View();
        }

        //metodo que crea un objeto serie de tipo SeriePastel y le envia
        //la data del metodo GetDataDummy en formato json
        public JsonResult DataPastel()
        {
            SeriePastel pastel = new SeriePastel();
            return Json(pastel.GetDataDummy(), JsonRequestBehavior.AllowGet);
        }



        //metodo que crea un objeto serie de tipo Barras y le envia
        //la data del metodo GetDataDummy en formato json
        public JsonResult DataBarras()
        {
            SerieBarra barras = new SerieBarra();
            return Json(barras.GetDataDummy(), JsonRequestBehavior.AllowGet);
        }
    }
}