import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// imports de los componentes creados
import { Home } from './home/home';
import { Productos } from './productos/productos';
import { Contacto } from './contacto/contacto';
import { Pagenotfound } from './pagenotfound/pagenotfound';
import { ChildA } from './child-a/child-a';
import { ChildB } from './child-b/child-b';

const routes: Routes = [
  { path: 'home', 
    component: Home, 
    children: [ 
      { path: 'child-a',
      component: ChildA, }, 
      { path: 'child-b', 
        component: ChildB, }, 
    ] 
  }, 
  { path: 'productos', component: Productos }, 
  { path: 'contacto', component: Contacto }, 
  { path: '', redirectTo: '/home', pathMatch: 'full' }, 
  { path: '**', component: Pagenotfound }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
