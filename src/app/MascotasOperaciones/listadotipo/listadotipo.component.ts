import { Component, OnInit } from '@angular/core';
import { MascotaService } from 'src/app/Servicios/mascota.service';
import { Mascota } from 'src/app/Interfaces/mascota';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listadotipo',
  templateUrl: './listadotipo.component.html',
  styleUrls: ['./listadotipo.component.css']
})
export class ListadotipoComponent implements OnInit {
  mascotas:Mascota[];
  tipo:string=null;
  tabla:boolean;

  constructor(private ms:MascotaService, private router:Router) {
  
   }

  ngOnInit() {
  }
 

  
  getListadoTipo(){
    this.ms.getTipo(this.tipo).subscribe(datos=>{
      console.log(datos);
      if(datos.length==0){
        this.tabla=false;
      }
      else{this.mascotas=datos, this.tabla=true}
    });
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
