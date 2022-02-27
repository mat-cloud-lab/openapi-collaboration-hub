namespace Domain.Models
{
    public class Service
    {
        public string Name { get; private set; }

        public Service(string name)
        {
            Name = name;
        }
    }
}
