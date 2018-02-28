using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using AmpeliteApi.Models;
using System.Data.SqlClient;
using Microsoft.EntityFrameworkCore;

namespace AmpeliteApi.Controllers.DailyPo
{
    [Produces("application/json")]
    [Route("api/DailypoGraphProduct")]
    public class DailypoGraphProductController : Controller
    {

        // GET: api/DailypoGraphProduct
        [HttpGet]
        public IEnumerable<string> Get()
        {
            using (var context = new db_AmpeliteContext())
            {
                SqlParameter category = new SqlParameter("@CategoryName", "Test");
                 context.Database.ExecuteSqlCommandAsync("NewCategory @CategoryName", category);
            }

            return new string[] { "value1", "value2" };
        }

        // GET: api/DailypoGraphProduct/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }
        
        // POST: api/DailypoGraphProduct
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }
        
        // PUT: api/DailypoGraphProduct/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }
        
        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
