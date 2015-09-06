using Infrastructure.Domain;

namespace Model.Location
{
    public class City : IAggregateRoot
    {
        public virtual int Id { get; set; }
        public virtual string Name { get; set; }
        public virtual State State { get; set; }

        public City()
        {
        }
    }
}
