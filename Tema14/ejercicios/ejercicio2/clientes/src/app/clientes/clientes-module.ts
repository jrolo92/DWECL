import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesService } from './clientes-service';
import { AltaCliente } from './alta-cliente/alta-cliente';



@NgModule({
  declarations: [
    AltaCliente
  ],
  imports: [
    CommonModule
  ],
  providers: [
    ClientesService
  ]
})

export class ClientesModule { }
