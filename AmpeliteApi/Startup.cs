using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.EntityFrameworkCore;
using AmpeliteApi.Models;

namespace AmpeliteApi
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors(options =>
            {
                options.AddPolicy("AllowSpecificOrigin", builder => builder.WithOrigins("http://localhost:3000/AmpeliteWeb"));
            });

            services.AddApplicationInsightsTelemetry(Configuration);
            var strConn = @"Server=AMPELITE-001\SQLEXPRESS01;Database=db_Ampelite;Trusted_Connection=True;user id=sa;password=Amp7896321;";
            services.AddDbContext<db_AmpeliteContext>(option => option.UseSqlServer(strConn));
            // Add framework services.
            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            //app.UseCors("AllowSpecificOrigin");
            app.UseCors(option => option.AllowAnyOrigin());
            app.UseCors(option => option.AllowAnyMethod());
            app.UseCors(option => option.AllowAnyHeader());
            app.UseCors(option => option.WithExposedHeaders("X-My-Custom-Header, X-Another-Custom-Header"));
            app.UseCors(option => option.AllowCredentials());

            app.UseMvc();
        }
    }
}
