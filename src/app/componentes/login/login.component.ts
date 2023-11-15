import { Component } from '@angular/core';
import { Login } from 'src/app/modelo/Login.model';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userData: Login = { email: '', password: '' };

  constructor(private clienteService: ClienteService) {}

  public onSubmit():void {
     // Aquí puedes llamara al servicio para enviar los datos al servidor
      this.clienteService.login(this.userData).subscribe(
      response => {
        console.log('Login exitoso:', response);
        // Puedes realizar otras acciones después del registro exitoso
      },
      error => {
        console.error('No está registrado en nuestra página:', error);
        // Puedes manejar errores aquí, por ejemplo, mostrar un mensaje de error al usuario
      }
    );

  }
}
