import { Component, OnInit } from '@angular/core';
import { MascotaService } from '../../Servicios/mascota.service';
import { Mascota } from '../../Interfaces/mascota';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  mascotas:Mascota[];
  m:Mascota;

  constructor(private ms:MascotaService, private router:Router) {
    this.getListado();
    
   }

  ngOnInit() {
  }

  getListado(){
    this.ms.getListado().subscribe(resultado=>{this.mascotas=resultado});
  }
  altaMascota():void{
    this.router.navigate(['altamascota']);
  }

  modificarMascota(m:Mascota):void{
    localStorage.setItem("id",m.id.toString())
    this.router.navigate(['modificarmascota']);
  }
  eliminarMascota(m:Mascota)
  {
    this.ms.getEliminar(m.id).subscribe(datos=>{
      this.mascotas=this.mascotas.filter(m2=>m2!=m);
      alert("La mascota se ha eliminado correctamente");
      this.router.navigate(["listadomascota"]);
      })
  }
  Venta(m:Mascota){
    let username =localStorage.getItem("username")
    localStorage.setItem("username", username);
    localStorage.setItem("id",m.id.toString())
    localStorage.setItem("nombre", m.nombre);
    localStorage.setItem("tipo", m.tipo);
    localStorage.setItem("precio", m.precio.toString());
    this.router.navigate(['venta']);
    
  }

}
