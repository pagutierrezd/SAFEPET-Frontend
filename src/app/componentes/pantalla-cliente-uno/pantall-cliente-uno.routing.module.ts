import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PantallaClienteUnoComponent } from './pantalla-cliente-uno.component';

const routes: Routes = [
  { path: '', component: PantallaClienteUnoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PantallaClienteUnoRoutingModule{}
