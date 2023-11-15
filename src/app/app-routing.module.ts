import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./componentes/login/login.module').then((res) => res.LoginModule) },
  { path: 'registro', loadChildren: () => import('./componentes/registro-cliente/registro-cliente.module').then((res) => res.RegistroClienteModule) },
  { path: 'pantalla-cliente-uno', loadChildren: () => import('./componentes/pantalla-cliente-uno/pantalla-cliente-uno.module').then((res) => res.PantallaClienteUnoModule) },
 // { path: 'principal/listarclientes', loadChildren: () => import('./componentes/listarclientes/listarclientes.module').then((res) => res.ListarClientesModule) },
  // Otras rutas según sea necesario

  // Redirige automáticamente a la ruta de login al abrir la página
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
