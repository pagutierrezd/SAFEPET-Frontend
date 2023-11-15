import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegistroCliente } from '../modelo/RegistroCliente.model';
import { UrlConstant } from '../constants/url-constants';
import { ActualizarCliente } from '../modelo/ActualizarCliente.model';
import { ListarClientes } from '../modelo/ListarClientes.model';
import { Login } from '../modelo/Login.model';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  private apiUrl = UrlConstant.PATHS.urlGlobal+ UrlConstant.PATHS.cliente
  constructor(private http: HttpClient) {}

  registrarCliente(registroClienteRequest: RegistroCliente): Observable<Boolean> {
    return this.http.post<Boolean>(this.apiUrl, registroClienteRequest);
  }

  ActualizarCliente(actualizarClienteRequest: ActualizarCliente): Observable<any>{
    return this.http.put(this.apiUrl,actualizarClienteRequest);
  }

  ListarClientes(): Observable<ListarClientes[]>{
    return this.http.get<ListarClientes[]>(this.apiUrl);
  }

  
  login(loginRequest:Login): Observable<ActualizarCliente>{
    const url = `${this.apiUrl}/auth`;
    return this.http.post<ActualizarCliente>(url,loginRequest);
  }
}
