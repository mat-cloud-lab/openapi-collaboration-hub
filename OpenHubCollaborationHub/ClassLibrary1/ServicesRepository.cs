using Domain.Abstract;
using Domain.Models;

namespace Domain
{
    public class ServicesRepository : IServicesRepository
    {
        public List<Service> GetServices()
        {
            return new List<Service>
            {
                new Service("BM.App.ExampleService")
            };
        }
    }
}
