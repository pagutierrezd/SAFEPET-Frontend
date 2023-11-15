import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegistroClienteComponent } from './componentes/registro-cliente/registro-cliente.component';
import { ActualizarClienteComponent } from './componentes/actualizar-cliente/actualizar-cliente.component';
import { ListarClientesComponent } from './componentes/listar-clientes/listar-clientes.component';
import { LoginComponent } from './componentes/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroClienteComponent,
    ActualizarClienteComponent,
    ListarClientesComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
