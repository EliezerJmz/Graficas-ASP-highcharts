using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Graficas.Models
{
    public class SerieBarra
    {
       //constructor vacio
        public SerieBarra()
        {

        }


        //esta grafica no tiene propiedade con nombres solo un array de objetos
        //construimos el array de objetos
        public object[] GetDataDummy()
        {
            //creamos un array data de objetos de 5 elementos
            object[] data = new object[5];
            data[0] = new object[] { "Angular", 55 };
            data[1] = new object[] { "HTML5", 75 };
            data[2] = new object[] { "CSS3", 60 };
            data[3] = new object[] { "VueJS", 75 };
            data[4] = new object[] { "ASP.NET", 55 };
    
            return data;
        }
    }

}