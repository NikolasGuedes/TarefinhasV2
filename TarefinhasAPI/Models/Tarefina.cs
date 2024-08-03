namespace TarefinhaAPI.Models;

public class Tarefinha
{
    public Guid Id { get; set; }
    public string Nome { get; set; }

    public Tarefinha(Guid id, string nome)
    {
        Id = id;
        Nome = nome;
    }
}
