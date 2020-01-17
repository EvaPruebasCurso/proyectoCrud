import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoComponent } from './listado/listado.component';
import { AltaComponent } from './alta/alta.component';
import { ModificarComponent } from './modificar/modificar.component';


const routes: Routes = [
  {
    path:'listado', component: ListadoComponent
  },
  {
    path:'alta', component:AltaComponent
  },
  {
    path:'modificar' , component:ModificarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
