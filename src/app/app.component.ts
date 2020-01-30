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
  username:string;
  password:string;
  num:String;
  u:Usuario;

  constructor(private router:Router, private us:UsuarioService){
    this.username='';
    this.password='';
    
  }
  ngOnInit() {
    localStorage.setItem("tipo_acceso_SESSION","-1");
    this.num="-1";
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
    this.router.navigate(['listadoventa']);
  }
  listadoHistorico(){
    this.router.navigate(['historico']);
  }
  entrarLogin(){
    this.us.getUnico(this.username).subscribe(dato=>{
      this.u=dato;
      if(this.u==null){alert("El username es incorrecto, vuelve a intentarlo")}
      else if(this.u!=null){
        localStorage.setItem("username",this.u.username);
        console.log(this.u)
        if(this.u.password==this.password){
          localStorage.setItem("tipo_acceso_SESSION",this.u.tipo_acceso.toString());
          this.num=this.u.tipo_acceso.toString();
          console.log(this.num);
        }
        else{alert("La contraseña es incorrecta, vuele a intentarlo"); this.password=''}
      }
    })
    console.log(this.num)
  }
  cerrarApp(){
    localStorage.setItem("tipo_acceso_SESSION","-1");
    this.num="-1";
    this.router.navigate(['login']);
    this.password='';
    this.username='';
    
  }
 
 
}
