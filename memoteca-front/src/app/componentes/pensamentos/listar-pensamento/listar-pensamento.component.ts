import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { PensamentoComponent } from '../pensamento/pensamento.component';
import { HttpClientModule } from '@angular/common/http';
import { Pensamento } from '../../../interface/pensamento';
import { PensamentosService } from '../../../service/pensamento.service';

@Component({
  selector: 'app-listar-pensamento',
  standalone: true,
  imports: [RouterLink, NgFor, PensamentoComponent, NgIf, HttpClientModule],
  templateUrl: './listar-pensamento.component.html',
  styleUrl: './listar-pensamento.component.css',
  providers: [PensamentosService, Router]
})
export class ListarPensamentoComponent {

  listaPensamentos : Pensamento[] = [ ]

  constructor(private service: PensamentosService, private router: Router) { }

  ngOnInit(): void {
    this.service.list().subscribe((listaPensamentos) => { this.listaPensamentos = listaPensamentos })
  }

  criar(){
    this.router.navigate(['/pensamento'])
  }
}
