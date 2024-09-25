using AutoMapper;
using Memoteca.Data.Dtos;
using Memoteca.Models;

namespace Memoteca.Profiles;

public class FilmeProfile : Profile
{
	public FilmeProfile()
	{
		CreateMap<CreatePensamentoDto, Pensamento>();
        CreateMap<UpdatePensamentoDto, Pensamento>();
	}
}