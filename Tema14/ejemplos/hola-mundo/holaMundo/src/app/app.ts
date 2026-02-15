import { Component, signal } from '@angular/core';

// Decorador de componente
@Component({
  // El nombre de este selector es el que vamos a usar como etiqueta
  // Y tendrá todas las características de este componente
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('holaMundo');
}
