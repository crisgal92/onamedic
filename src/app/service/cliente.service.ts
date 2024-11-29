import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private api ='http://localhost:8080/clientes'; //url para que angular obtenga las entidades de tipo cliente

  constructor(private http:HttpClient) { }

  getClienteList():Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.api);
  }

  createCliente( cliente : Cliente):Observable<Cliente>{
    return this.http.post<Cliente>(this.api,cliente)
  }

  deleteClienteById(id :number):Observable<any>{
    return this.http.delete(this.api+'/'+id);
  }

}