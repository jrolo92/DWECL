import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesService } from './clientes-service';
import { AltaCliente } from './alta-cliente/alta-cliente';
import { FormsModule } from '@angular/forms';
import { ListadoClientes } from './listado-clientes/listado-clientes';




@NgModule({
  declarations: [
    AltaCliente,
    ListadoClientes
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    ClientesService
  ],
  exports:[ 
    AltaCliente
  ]
})

export class ClientesModule { }
