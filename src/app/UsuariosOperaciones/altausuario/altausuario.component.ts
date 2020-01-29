import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/Interfaces/usuario';
import { UsuarioService } from 'src/app/Servicios/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-altausuario',
  templateUrl: './altausuario.component.html',
  styleUrls: ['./altausuario.component.css']
})
export class AltausuarioComponent implements OnInit {
  u:Usuario={username:'',password:'',tipo_acceso:1, nombre:'', apellido:'', telefono:''};
  //El tipo de acceso siempre va a ser 1, porque el administrador va a crear usuarios con el mismo tipo de acceso 

  constructor(private us:UsuarioService, private router:Router) { }

  ngOnInit() {
  }
  getAlta(){
    //Creamos una contraseña aleatoria para el usuario
    this.u.password=Math.random().toString(36).slice(8);
    this.us.getAlta(this.u).subscribe(resultado=>{this.u=resultado});
    this.router.navigate(['listadousuario']);

  }
}
