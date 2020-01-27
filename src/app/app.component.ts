import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MascotaService } from './Servicios/mascota.service';
import { Mascota } from './Interfaces/mascota';
import { UsuarioService } from './Servicios/usuario.service';
import { Usuario } from './Interfaces/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyectoCrud';
  username="usernamedelogin";
  password=null;
  num:number=1;
  u:Usuario;

  constructor(private router:Router, private ms:UsuarioService){

  }
  abrirListadomascota(){
    this.router.navigate(["listadomascota"]);
  }
  abrirListadousuario(){
    this.router.navigate(["listadousuario"]);
  }
  getUnico(){
    this.ms.getUnico("admin").subscribe(datos=>{this.u=datos});
  }
 
}
