using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model.Location
{
    public class State
    {
        public virtual int Id { get; private set; }
        public virtual String Name { get; set; }
        public virtual String ShortName { get; set; }
        public virtual Country Country { get; set; }
        public virtual Region Region { get; set; }

        public override int GetHashCode()
        {
            return this.Id.GetHashCode();
        }

        public override bool Equals(object obj)
        {
            return this.Id.Equals(((State)obj).Id);
        }
        
        public virtual IList<City> Cities{ get; set; }
    }
}
