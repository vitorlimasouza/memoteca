import { Component } from '@angular/core';
import { Pensamento } from '../../../interface/pensamento';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PensamentosService } from '../../../service/pensamento.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-editar-pensamento',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './editar-pensamento.component.html',
  styleUrl: './editar-pensamento.component.css',
  providers: [Router, PensamentosService]
})
export class EditarPensamentoComponent {
  pensamento: Pensamento = {
    id: '',
    conteudo: '',
    autoria: '',
    modelo: ''
  }

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

  constructor(private service: PensamentosService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(){
    const id = this.route.snapshot.paramMap.get('id')
    
    this.service.get(id!).subscribe((pensameto) => {
      this.pensamento = pensameto
    })
  }

  onSubmit(){
    this.service.put(this.pensamento).subscribe(() => 
                this.router.navigate(['quadro']))
  }

  onCancel(event: Event){
    event.preventDefault();
    this.router.navigate(['quadro'])
  }

}
