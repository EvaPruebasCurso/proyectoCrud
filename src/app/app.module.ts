import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoComponent } from './MascotasOperaciones/listado/listado.component';
import { AltaComponent } from './MascotasOperaciones/alta/alta.component';
import { ModificarComponent } from './MascotasOperaciones/modificar/modificar.component';
import{HttpClientModule}  from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AltausuarioComponent } from './UsuariosOperaciones/altausuario/altausuario.component';
import { ListadousuarioComponent } from './UsuariosOperaciones/listadousuario/listadousuario.component';
import { ModificarusuarioComponent } from './UsuariosOperaciones/modificarusuario/modificarusuario.component';


@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
    AltaComponent,
    ModificarComponent,
    AltausuarioComponent,
    ListadousuarioComponent,
    ModificarusuarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
