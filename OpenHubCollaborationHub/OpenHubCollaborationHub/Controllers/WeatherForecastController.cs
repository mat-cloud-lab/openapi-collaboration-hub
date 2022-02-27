using Domain;
using Domain.Abstract;
using Microsoft.AspNetCore.Mvc;

namespace OpenHubCollaborationHub.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<WeatherForecastController> _logger;
        private readonly IServicesRepository servicesRepository;

        public WeatherForecastController(
            ILogger<WeatherForecastController> logger,
            IServicesRepository servicesRepository)
        {
            _logger = logger;
            this.servicesRepository = servicesRepository;
        }

        [HttpGet]
        public IEnumerable<WeatherForecast> Get()
        {
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = DateTime.Now.AddDays(index),
                TemperatureC = Random.Shared.Next(-20, 55),
                Summary = servicesRepository.GetServices().First().Name
            })
            .ToArray();
        }
    }
}