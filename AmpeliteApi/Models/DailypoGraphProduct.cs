using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AmpeliteApi.Models
{

    public class DailypoGraphProduct
    {
        public DateTime EDate { get; set; }
        public int _Day { get; set; }
        public string GroupCode { get; set; }
        public string TeamName {get; set; }
        public double Unit { get; set; }
    }
    
}
