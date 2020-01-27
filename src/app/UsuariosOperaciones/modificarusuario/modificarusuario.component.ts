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
    this.us.getModificar(u).subscribe(datos=>{
      this.u=datos;
      this.router.navigate(["listausuario"]);
    })
  }

}
