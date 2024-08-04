using Microsoft.AspNetCore.Builder;
using TarefinhaAPI.Models;

namespace TarefinhaAPI.Rotas;


public static class TarefinhasRotas
{

  public static List<Tarefinha> Tarefinhas = new()
    {
        new (Guid.NewGuid(), "Titulo 01", "Descricao 01", "tema_01"),
        new (Guid.NewGuid(), "Titulo 02", "Descricao 02", "tema_02"),
        new (Guid.NewGuid(), "Titulo 03", "Descricao 03", "tema_03"),
        new (Guid.NewGuid(), "Titulo 04", "Descricao 04", "tema_04"),
        new (Guid.NewGuid(), "Titulo 05", "Descricao 05", "tema_05"),

    };

  public static void MapTarefinhasRotas(this WebApplication app)
    {
        app.MapGet("/tarefinhas", () =>
        {
            return Tarefinhas;
        });

        app.MapPost("/tarefinhas", (Tarefinha novaTarefinha) =>
        {
            novaTarefinha.Id = Guid.NewGuid();
            Tarefinhas.Add(novaTarefinha);
            return novaTarefinha;
        });

        app.MapPut("/tarefinhas/{id}", (Guid id, Tarefinha tarefinha) =>
        {
            var encontrado = Tarefinhas.Find(x => x.Id == id);

            if (encontrado == null) { return Results.NotFound(); };

            encontrado!.Titulo = tarefinha.Titulo;
            encontrado!.Descricao = tarefinha.Descricao;
            encontrado!.Cor = tarefinha.Cor;


          return Results.Ok(encontrado);
        });

        app.MapDelete("/tarefinhas/{id}", (Guid id) =>
        {
            var tarefinhaParaDeletar = Tarefinhas.Find(x => x.Id == id);

            if (tarefinhaParaDeletar == null)
                return;

            Tarefinhas.Remove(tarefinhaParaDeletar);
        });


    }
}
