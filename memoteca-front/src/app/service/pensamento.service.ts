import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';
import { Pensamento } from '../interface/pensamento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

@NgModule({
  imports: [HttpClientModule]
})

export class PensamentosService {

  private readonly API = 'http://localhost:7196/Pensamento';

  constructor(private http: HttpClient) { }

  get(id: string) : Observable<Pensamento>{
    const url = `${this.API}/${id}`
    return this.http.get<Pensamento>(url)
  }

  list(): Observable<Pensamento[]>
  {
    return this.http.get<Pensamento[]>(this.API)
  }

  post(pensamento: Pensamento): Observable<Pensamento> {
    return this.http.post<Pensamento>(this.API, pensamento)
  }

  put(pensamento: Pensamento) : Observable<Pensamento>{
    const url = `${this.API}/editar/${pensamento.id}`
    return this.http.put<Pensamento>(url, pensamento)
  }

  delete(id : string) : Observable<Pensamento>{
    const url = `${this.API}/excluir/${id}`
    return this.http.delete<Pensamento>(url)
  }
  
}
