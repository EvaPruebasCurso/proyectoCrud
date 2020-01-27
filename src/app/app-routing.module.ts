import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoComponent } from './MascotasOperaciones/listado/listado.component';
import { AltaComponent } from './MascotasOperaciones/alta/alta.component';
import { ModificarComponent } from './MascotasOperaciones/modificar/modificar.component';
import { ListadousuarioComponent } from './UsuariosOperaciones/listadousuario/listadousuario.component';
import { AltausuarioComponent } from './UsuariosOperaciones/altausuario/altausuario.component';
import { ModificarusuarioComponent } from './UsuariosOperaciones/modificarusuario/modificarusuario.component';


const routes: Routes = [
  {
    path:'listadomascota', component: ListadoComponent
  },
  {
    path:'altamascota', component:AltaComponent
  },
  {
    path:'modificarmascota' , component:ModificarComponent
  },
  {
    path:'listadousuario', component:ListadousuarioComponent
  },
  {
    path:'altausuario', component:AltausuarioComponent
  },
  {
    path:'modificarusuario', component:ModificarusuarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
