import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from './Servicios/usuario.service';
import { Usuario } from './Interfaces/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyectoCrud';
  username="usernam";
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
  getTipo(){
    this.router.navigate(['listadotipo']);
  }
  listadoVenta(){
    localStorage.setItem("username",this.username);
    this.router.navigate(['listadoventa']);
  }
  listadoHistorico(){
    this.router.navigate(['historico']);
  }
 
}
