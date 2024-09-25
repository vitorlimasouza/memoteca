import { Component } from '@angular/core';
import { PensamentosService } from '../../../service/pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Pensamento } from '../../../interface/pensamento';

@Component({
  selector: 'app-excluir-pensamento',
  standalone: true,
  imports: [],
  templateUrl: './excluir-pensamento.component.html',
  styleUrl: './excluir-pensamento.component.css',
  providers: [PensamentosService, Router]
})


export class ExcluirPensamentoComponent {

  pensamento: Pensamento = { id: '', conteudo: '', autoria: '', modelo: '' }

  constructor(private service: PensamentosService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.get(id!).subscribe((pensameto) => {
      this.pensamento = pensameto
    })
  }

  onDelete(){
    if(this.pensamento.id){
      this.service.delete(this.pensamento.id).subscribe(()=> {
        this.router.navigate(['quadro'])
      })
    }
  }

  onCancel() { 
    this.router.navigate(['quadro']) 
  }
}
