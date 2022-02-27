using Domain.Models;

namespace Domain.Abstract
{
    public interface IServicesRepository
    {
        List<Service> GetServices();
    }
}