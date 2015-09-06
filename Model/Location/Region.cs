using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model.Location
{
    public class Region
    {
        public virtual int Id { get; set; }
        public virtual string Name { get; set; }
        public virtual Country Country { get; set; }
        public virtual IList<State> States { get; set; }

        public Region()
        {
            States = new List<State>();
            Country = new Country();
        }
    }
}
