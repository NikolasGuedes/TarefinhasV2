using TarefinhaAPI.Models;


namespace TarefinhaAPI.Filtros;

internal class LinqFilter
{
  public static void FiltrarTarefinhaPorCor(List<Tarefinha> tarefinhas, string cor)
  {
    //Select = seleciona todos os itens da propriedade Genero
    //Distinct = Não seleciona informações repetidas
    //ToList = Transforma em lista
    var resultado = tarefinhas.Where(tarefinhas => tarefinhas.Cor!.Contains(cor)).ToList();

    foreach (var tarefinha in resultado)
    {
      Console.WriteLine($"Genero: {tarefinha.Titulo}");
    }


  }
}
