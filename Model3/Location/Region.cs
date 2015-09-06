using System;
using System.Collections.Generic;
using Infrastructure.Domain;

namespace Model.Location
{
    public class Region : IAggregateRoot
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
