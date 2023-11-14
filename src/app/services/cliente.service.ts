import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegistroCliente } from '../modelo/RegistroCliente.model';
import { UrlConstant } from '../constants/url-constants';
import { ActualizarCliente } from '../modelo/ActualizarCliente.model';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  private apiUrl = UrlConstant.PATHS.urlGlobal+ UrlConstant.PATHS.cliente
  constructor(private http: HttpClient) {}

  registrarCliente(registroClienteRequest: RegistroCliente): Observable<any> {
    return this.http.post(this.apiUrl, registroClienteRequest);
  }

  ActualizarCliente(actualizarClienteRequest: ActualizarCliente): Observable<any>{
    return this.http.put(this.apiUrl,actualizarClienteRequest);
  }
}
