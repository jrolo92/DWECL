import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';

// Modulo que proporciona un contexto de compilación para los componentes
// Contienen un conjunto de componentes
@NgModule({
  // Aqui se agrupan los componentes (que se van a reconocer entre ellos).
  // Un componente no puede pertenecer a más de un modulo.
  declarations: [
    App
  ],

  // Importar modulos completos dentro de este (y se reconozcan)
  imports: [
    BrowserModule,
    AppRoutingModule
  ],

  // Agrupa servicios.
  // Una vez esté declarado en un modulo tendrán alcance global (por defecto)
  providers: [
    provideBrowserGlobalErrorListeners(),
  ],

  // Componente principal con el que se va a ejecutar la app (arranque)
  bootstrap: [App]
})

export class AppModule { }
