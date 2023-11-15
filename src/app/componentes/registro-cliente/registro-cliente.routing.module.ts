import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroClienteComponent } from './registro-cliente.component';

const routes: Routes = [
  { path: '', component: RegistroClienteComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistroClienteRoutingModule{}
