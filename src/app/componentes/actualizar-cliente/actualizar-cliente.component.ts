import { Component } from '@angular/core';
import { ActualizarCliente } from 'src/app/modelo/ActualizarCliente.model';
import { ClienteService } from 'src/app/services/cliente.service';


@Component({
  selector: 'app-actualizar-cliente',
  templateUrl: './actualizar-cliente.component.html',
  styleUrls: ['./actualizar-cliente.component.css']
})
export class ActualizarClienteComponent  {

  userData: ActualizarCliente = { cedula: '',  telefono: '', correo: '', direccion: '' };

  constructor(private clienteService: ClienteService) {}

  public onSubmit():void {
     // Aquí puedes llamar al servicio para enviar los datos al servidor
      this.clienteService.ActualizarCliente(this.userData).subscribe(
      response => {
        console.log('Actualización exitosa:', response);
      },
      error => {
        console.error('Error en la actualización:', error);
        // Puedes manejar errores aquí, por ejemplo, mostrar un mensaje de error al usuario
      }
    );

  }
}