using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Graficas.Models
{
    public class SeriePastel
    {
        public string name { get; set; }
        public double y { get; set; }
        public bool sliced { get; set; }
        public bool selected { get; set; }

        //creamos un constructor vacio
        public SeriePastel()
        {

        }

        //creamos un constructor para inicializar el objeto
        //como no van a llevar informacion ponemos a sliced y selectef = false
        public SeriePastel(string name, double y, bool sliced=false, bool selected=false)
        {
            this.name = name;
            this.y = y; 
            this.sliced = sliced;
            this.selected = selected;
        }


        //Creamos un metodo que devuelva un listado de data, aqui la información podria venir de una DB
        //en este caso es data statica
        public List<SeriePastel> GetDataDummy()
        {
            List<SeriePastel> lista = new List<SeriePastel>();

            //agregamos a la lista objetos de tipo SeriePastel
            lista.Add(new SeriePastel("Angular", 45));
            lista.Add(new SeriePastel("VueJS", 50));
            lista.Add(new SeriePastel("ReactJS", 60));
            lista.Add(new SeriePastel("CSS3", 34));
            lista.Add(new SeriePastel("HTML5", 28));

            return lista;
        }

    }
}