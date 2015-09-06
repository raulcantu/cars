using System.Collections.Generic;
using Model.Accounts;
using Infrastructure.Domain;

namespace Model.Users
{
    class User : IAggregateRoot
    {
        public virtual int Id { get; set; }
        public virtual string UserName { get; set; }
        public virtual string Email { get; set; }
        public virtual IList<Role> Roles { get; set; }
        public virtual Account Account { get; set; }

        public User()
        {
            Roles = new List<Role>();
        }
    }
}
