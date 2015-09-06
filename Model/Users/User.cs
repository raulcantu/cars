using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Model.Accounts;

namespace Model.Users
{
    class User
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
