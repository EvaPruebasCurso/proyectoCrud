import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/Interfaces/usuario';
import { UsuarioService } from 'src/app/Servicios/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listadousuario',
  templateUrl: './listadousuario.component.html',
  styleUrls: ['./listadousuario.component.css']
})
export class ListadousuarioComponent implements OnInit {
  usuarios:Usuario[];
  usuario:Usuario;

  constructor(private us:UsuarioService, private router:Router) {
    this.getListado();
   }

  ngOnInit() {
  }
  getListado(){
    this.us.getListado().subscribe(resultado=>{this.usuarios=resultado});
  }
  altaUsuario():void{
    this.router.navigate(['altausuario']);
  }

  modificarUsuario(u:Usuario):void{
    localStorage.setItem("username",u.username)
    this.router.navigate(['modificarusuario']);
  }
  eliminarUsuario(u:Usuario)
  {
    this.us.getEliminar(u.username).subscribe(datos=>{
      this.usuarios=this.usuarios.filter(u2=>u2!=u);
      alert("El usuario se ha eliminado correctamente");
      this.router.navigate(["listadousuario"]);
      })
  }

}
