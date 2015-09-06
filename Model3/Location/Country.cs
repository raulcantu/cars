using System.Collections.Generic;
using Infrastructure.Domain;

namespace Model.Location
{
    public class Country : IAggregateRoot
    {
        public virtual int Id { get; set; }
        public virtual string Name { get; set; }
        public virtual string Code { get; set; }
    }
}
