using System.ComponentModel.DataAnnotations;

namespace Memoteca.Data.Dtos

{
    public class CreatePensamentoDto
    {

        [Required(ErrorMessage = "Pensamento em branco")]
        public string Conteudo { get; set; } = "";
    
        public string Autoria { get; set; } = "";

        [Required(ErrorMessage = "Sem modelo")]
        public string Modelo { get; set; } = "";
    }
}
