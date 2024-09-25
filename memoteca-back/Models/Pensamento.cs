using System.ComponentModel.DataAnnotations;

namespace Memoteca.Models;

public class Pensamento
{

    [Key]
    public Guid Id { get; set; } = new Guid();

    [Required]
    public string Conteudo { get; set; } = "";

    public string Autoria { get; set; } = "";

    [Required]
    public string Modelo { get; set; } = "";
}