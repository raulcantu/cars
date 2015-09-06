using System.Collections.Generic;
using Infrastructure.Domain;

namespace Model.Users
{
    public class Role : IAggregateRoot
    {
        public virtual int Id { get; set; }
        public virtual string Name { get; set; }
    }
}
