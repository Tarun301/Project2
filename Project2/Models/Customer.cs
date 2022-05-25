using System;
using System.Collections.Generic;

#nullable disable

namespace Project2.Models
{
    public partial class Customer
    {
        public Customer()
        {
            Sales = new HashSet<Sale>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }

        public virtual ICollection<Sale> Sales { get; set; }
    }
}
