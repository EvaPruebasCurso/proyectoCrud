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
import { VentaComponent } from './MascotasOperaciones/venta/venta.component';
import { ListadotipoComponent } from './MascotasOperaciones/listadotipo/listadotipo.component';
import { ListadoventaComponent } from './MascotasOperaciones/listadoventa/listadoventa.component';
import { ListadohistoricoComponent } from './HistoricoOperaciones/listadohistorico/listadohistorico.component';
import { MenuadminComponent } from './Menus inicio/menuadmin/menuadmin.component';
import { MenuuserComponent } from './Menus inicio/menuuser/menuuser.component';


@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
    AltaComponent,
    ModificarComponent,
    AltausuarioComponent,
    ListadousuarioComponent,
    ModificarusuarioComponent,
    VentaComponent,
    ListadotipoComponent,
    ListadoventaComponent,
    ListadohistoricoComponent,
    MenuadminComponent,
    MenuuserComponent,
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
