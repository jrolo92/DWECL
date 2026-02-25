import { Component } from '@angular/core';

import { Cliente, Grupo } from './../cliente.model'; 
import { ClientesService } from './../clientes-service';

@Component({
  selector: 'app-listado-clientes',
  standalone: false,
  templateUrl: './listado-clientes.html',
  styleUrl: './listado-clientes.css',
})
export class ListadoClientes {

  clientes: Cliente[];

  constructor ( private clientesService: ClientesService) {

    this.clientes = this.clientesService.getClientes();

  }

}
