import { Component } from '@angular/core';
import { ClientesService } from './../clientes-service';
import { Cliente, Grupo } from './../cliente.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-alta-cliente',
  standalone: false,
  templateUrl: './alta-cliente.html',
  styleUrl: './alta-cliente.css',
})

export class AltaCliente {

  cliente: Cliente; 
  grupos: Grupo[];

  constructor(private clientesService: ClientesService) {

    this.cliente = this.clientesService.nuevoCliente(); 
    this.grupos = this.clientesService.getGrupos();

  }

  nuevoCliente(): void { 
    this.clientesService.agregarCliente(this.cliente);
    this.cliente = this.clientesService.nuevoCliente(); 
  } 
  
  ngOnInit():void { } 

}
