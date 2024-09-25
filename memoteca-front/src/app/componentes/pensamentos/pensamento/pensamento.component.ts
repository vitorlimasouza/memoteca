import { Component, Input } from "@angular/core";
import { ListarPensamentoComponent } from "../listar-pensamento/listar-pensamento.component";
import { NgClass } from "@angular/common";
import { Pensamento } from "../../../interface/pensamento";
import { Router } from "@angular/router";

@Component({
  selector: 'app-pensamento',
  standalone: true,
  imports: [ListarPensamentoComponent, NgClass],
  templateUrl: './pensamento.component.html',
  styleUrl: './pensamento.component.css',
  providers: [Router]
})

export class PensamentoComponent {

  constructor(private router: Router) {}

  @Input() pensamento : Pensamento = {
    id: '',
    conteudo: '',
    autoria: '',
    modelo: ''
  };

  larguraPensamento(): string {

    if(this.pensamento.conteudo.length >= 250) return 'pensamento-g'

    return 'pensamento-p'
  }

  excluir(){
    this.router.navigate([`pensamento/excluir/${this.pensamento.id}`])
  }

  editar(){
    this.router.navigate([`pensamento/editar/${this.pensamento.id}`])
  }

}
