import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { PensamentosService } from '../../../service/pensamento.service';
import { Pensamento } from '../../../interface/pensamento';

@Component({
  selector: 'app-criar-pensamento',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './criar-pensamento.component.html',
  styleUrl: './criar-pensamento.component.css',
  providers: [PensamentosService, Router]
})
export class CriarPensamentoComponent {

  modelos = [
  {
    modelo: 'modelo1',
    texto: 'Modelo 1',
    cor: 'Aspas azuis'
  },
  {
    modelo: 'modelo2',
    texto: 'Modelo 2',
    cor: 'Aspas azul claro'
  },
  {
    modelo: 'modelo3',
    texto: 'Modelo 3',
    cor: 'Aspas verdes'
  }]

  pensamento : Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: 'modelo1'
  }

  constructor(private service: PensamentosService, private router: Router){ }

  onSubmit(){
    this.service.post(this.pensamento).subscribe(() => {
      this.router.navigate(['quadro'])
    })
  }

  onCancel(event: Event){
    event.preventDefault();
    this.router.navigate(['quadro'])
  }

}
