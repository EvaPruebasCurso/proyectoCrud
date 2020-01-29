import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/Interfaces/usuario';
import { UsuarioService } from 'src/app/Servicios/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modificarusuario',
  templateUrl: './modificarusuario.component.html',
  styleUrls: ['./modificarusuario.component.css']
})
export class ModificarusuarioComponent implements OnInit {

  u:Usuario;
  constructor(private us:UsuarioService, private router:Router) { }

  ngOnInit() {
    this.modificar();
  }
  modificar(){
    let username=localStorage.getItem("username");
    this.us.getUnico(username).subscribe(datos=>{this.u=datos});
  }
  Actualizar(u:Usuario)
  {
    let num=Math.floor(Math.random() * (12 - 6)) + 6;
    this.u.password=Math.random().toString(36).slice(num);
    this.us.getModificar(u).subscribe(datos=>{
      this.u=datos;
      this.router.navigate(["listadousuario"]);
    })
  }

}
