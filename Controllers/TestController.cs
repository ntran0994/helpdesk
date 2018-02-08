using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace HelpDesk.Controllers
{
    [Route("api/Test")]
    public class TestController : Controller
    {
        // GET api/test
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/test
        [HttpPost]
        public IActionResult TestFunc()
        {
            return Ok("Nam đã ở đây");
        }
    }
}
