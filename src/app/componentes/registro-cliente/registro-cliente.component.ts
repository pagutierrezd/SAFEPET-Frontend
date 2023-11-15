import { Component } from '@angular/core';
import { RegistroCliente } from 'src/app/modelo/RegistroCliente.model';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-registro-cliente',
  templateUrl: './registro-cliente.component.html',
  styleUrls: ['./registro-cliente.component.css']
})
export class RegistroClienteComponent {

  userData: RegistroCliente = { cedula: '', password: '', nombre: '', telefono: '', correo: '', direccion: '' };

  constructor(private clienteService: ClienteService) {}

  public onSubmit():void {
     // Aquí puedes llamar al servicio para enviar los datos al servidor
      this.clienteService.registrarCliente(this.userData).subscribe(
      response => {
        console.log('Registro exitoso:', response);
        // Puedes realizar otras acciones después del registro exitoso
      },
      error => {
        console.error('Error en el registro:', error);
        // Puedes manejar errores aquí, por ejemplo, mostrar un mensaje de error al usuario
      }
    );

  }
}
