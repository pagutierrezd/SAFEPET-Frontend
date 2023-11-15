import { Component } from '@angular/core';
import { Login } from 'src/app/modelo/Login.model';
import { AuthService } from 'src/app/services/auth.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userData: Login = { email: '', password: '' };

  constructor(private clienteService: ClienteService, private authService: AuthService, private router: Router) {}

  login():void {
      this.clienteService.login(this.userData).subscribe(
      response => {
        console.log('Login exitoso:', response);
        this.authService.login();
        this.router.navigate(['/pantalla-cliente-uno']);
      }
    );

  }
}
