import { Component, OnInit } from '@angular/core';
import { ListarClientes } from 'src/app/modelo/ListarClientes.model';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.css']
})


export class ListarClientesComponent implements OnInit {

  clientes: ListarClientes[] = []; // Ajusta el tipo según tu modelo de datos
  clienteEncontrado: ListarClientes | null = null; // Cliente encontrado o nulo
  filtroCedula: string = '';

  constructor(private clienteService: ClienteService) {} 

  ngOnInit(): void {
    // Llama a tu servicio para obtener la lista de clientes
    this.obtenerClientes();
  }


  obtenerClientes(): void {
    this.clienteService.ListarClientes().subscribe(
      data => {
        this.clientes = data;
      },
      error => {
        console.error('Error al obtener la lista de clientes:', error);
      }
    );
  }


  filtrarClientes(): void {
    if (!this.filtroCedula) {
      // Si el campo de filtro está vacío, muestra todos los clientes
      this.obtenerClientes();
    } else {
      // Filtra los clientes según la cédula ingresada
      this.clientes = this.clientes.filter(cliente =>
        cliente.cedula.toLowerCase().includes(this.filtroCedula.toLowerCase())
      );
    }
  }


}
