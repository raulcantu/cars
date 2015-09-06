using System;
using System.Collections.Generic;
using Infrastructure.Enums;
using Model.Location;
using Infrastructure.Domain;

namespace Model.Accounts
{
    class Account : IAggregateRoot
    {
        public virtual int Id { get; set; }
        public virtual string UserName { get; set; }
        public virtual string FirstName { get; set; }
        public virtual string LastName { get; set; }
        public virtual Gender Gender { get; set; }
        public virtual string Email { get; set; }
        public virtual string ZipCode { get; set; }
        public virtual DateTime? BirthDate { get; set; }
        public virtual AuthProvider Provider { get; set; }
        public virtual DateTime CreationDate { get; set; }
        public virtual DateTime ModifiedDate { get; set; }
        public virtual float Lat { get; set; }
        public virtual float Long { get; set; }
        public virtual City City { get; set; }
        public virtual State State { get; set; }
        public virtual Country Country { get; set; }
        public virtual string Address { get; set; }
        public virtual string Address2 { get; set; }
        public virtual string RegionName { get; set; }
        public virtual string Phone { get; set; }
        public virtual string ForgotPasswordToken { get; set; }
        public virtual bool IsActive { get; set; }
        public virtual bool IsNewsletterSubscribed { get; set; }
        public virtual long FacebookId { get; set; }

        public virtual string BirthDateOnlyDate
        {
            get
            {
                if (BirthDate.HasValue)
                {
                    return BirthDate.Value.ToString("yyyy-MM-dd");
                }
                else
                {
                    return string.Empty;
                }
            }
        }

        public virtual int? PhoneInt
        {
            get
            {
                try
                {
                    return Int32.Parse(Phone);
                }
                catch
                {
                    return null;
                }
            }
        }

        public virtual string GeneralNewsletter
        {
            get
            {
                string subscriberSite = string.Empty;
                return subscriberSite = IsNewsletterSubscribed ? "YES" : "NO";
            }
        }

        public override int GetHashCode()
        {
            return this.Id.GetHashCode();
        }

        public override bool Equals(object obj)
        {
            return this.Id.Equals(((Account)obj).Id);
        }

        public Account()
        {
        }
    }
}
