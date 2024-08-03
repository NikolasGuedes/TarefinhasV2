using Microsoft.AspNetCore.Builder;
using TarefinhaAPI.Models;

namespace TarefinhaAPI.Rotas;


public static class TarefinhasRotas
{

    public static List<Tarefinha> Tarefinhas = new()
    {
        new (Guid.NewGuid(), "Nikolas"),
        new (Guid.NewGuid(), "Nathan"),
        new (Guid.NewGuid(), "Pedro"),
        new (Guid.NewGuid(), "Matheus"),
        new (Guid.NewGuid(), "Henrique"),
        new (Guid.NewGuid(), "Willian"),
    };

    public static void MapTarefinhasRotas(this WebApplication app)
    {
        app.MapGet("/pessoas", () =>
        {
            return Tarefinhas;
        });

        app.MapGet("/pessoas/{nome}", (string nome) => Tarefinhas.Find(x => x.Nome.StartsWith(nome)));

        app.MapPost("/pessoas", (Tarefinha novaPessoa) =>
        {
            novaPessoa.Id = Guid.NewGuid();
            Tarefinhas.Add(novaPessoa);
            return novaPessoa;
        });

        app.MapPut("/pessoas/{id}", (Guid id, Tarefinha pessoa) =>
        {
            var encontrado = Tarefinhas.Find(x => x.Id == id);

            if (encontrado == null) { return Results.NotFound(); };

            encontrado!.Nome = pessoa.Nome;

            return Results.Ok(encontrado);
        });

        app.MapDelete("/pessoas/{nome}", (String nome) =>
        {
            var pessoaParaDeletar = Tarefinhas.Find(x => x.Nome == nome);

            if (pessoaParaDeletar == null)
                return;

            Tarefinhas.Remove(pessoaParaDeletar);
        });


    }
}