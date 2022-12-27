using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Graficas.Startup))]
namespace Graficas
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
