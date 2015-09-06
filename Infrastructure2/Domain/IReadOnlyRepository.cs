using System.Linq;

namespace Infrastructure.Domain
{
    public interface IReadOnlyRepository<T, TId> where T : IAggregateRoot 
    {
        T FindById(TId id);
        IQueryable<T> FindAll();        
        //IEnumerable<T> FindById(T id);
        void EvictByType();
        void Evict(T entity);
    }
}
