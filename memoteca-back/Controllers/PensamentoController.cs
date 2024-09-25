using Microsoft.AspNetCore.Mvc;
using Memoteca.Models;
using Memoteca.Data;
using Memoteca.Data.Dtos;
using AutoMapper;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Memoteca.Controllers;

[ApiController]
[Route("[controller]")]
public class PensamentoController : ControllerBase
{
    private MemotecaContext _context;
    private IMapper _mapper;

    public PensamentoController(MemotecaContext memotecaContext, IMapper mapper)
    {
        _context = memotecaContext;
        _mapper = mapper;
    }
    
    [HttpPost]
    public IActionResult PostPensamento([FromBody] CreatePensamentoDto pensamentoDto)
    {
        Pensamento pensamento = _mapper.Map<Pensamento>(pensamentoDto);
        _context.Pensamentos.Add(pensamento);
        _context.SaveChanges();
        return CreatedAtAction(nameof(GetPensamento), new { id = pensamento.Id }, pensamento);
    } 

    [HttpPut("editar/{id}")]
    public IActionResult AtualizaFilme(string id, [FromBody] UpdatePensamentoDto pensamentoDto)
    {
        var pensamento = _context.Pensamentos.FirstOrDefault(
            pensamento => pensamento.Id == Guid.Parse(id));
        
        if (pensamento == null) return NotFound();

        _mapper.Map(pensamentoDto, pensamento);

        _context.SaveChanges();
        
        return NoContent();
    }

    [HttpGet] 
    public IActionResult GetPensamentos()
    {
        return Ok(_context.Pensamentos);
    }

    [HttpGet("{id}")] 
    public IActionResult GetPensamento(string id){
        
        var pensamento = _context.Pensamentos.FirstOrDefault(p => p.Id == Guid.Parse(id));

        if (pensamento == null) return NotFound();

        return Ok(pensamento);
    }

    [HttpDelete("excluir/{id}")]
    public IActionResult DeletePensamento(string id){
        var pensamento = _context.Pensamentos.FirstOrDefault(
            pensamento => pensamento.Id == Guid.Parse(id));

        if (pensamento == null) return NotFound();
        
        _context.Pensamentos.Remove(pensamento);
        _context.SaveChanges();
    
        return NoContent();
    }
}