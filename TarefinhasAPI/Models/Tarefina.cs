namespace TarefinhaAPI.Models;

public class Tarefinha
{
    public Guid Id { get; set; }
    public string Titulo { get; set; }
    public string Descricao { get; set; }
    public string Cor { get; set; }

  public Tarefinha(Guid id, string titulo, string descricao, string cor)
  {
    Id = id;
    Titulo = titulo;
    Descricao = descricao;
    Cor = cor;
  }
}
