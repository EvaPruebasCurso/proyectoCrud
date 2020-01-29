import { Component, OnInit } from '@angular/core';
import { MascotaService } from 'src/app/Servicios/mascota.service';
import { Mascota } from 'src/app/Interfaces/mascota';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listadoventa',
  templateUrl: './listadoventa.component.html',
  styleUrls: ['./listadoventa.component.css']
})
export class ListadoventaComponent implements OnInit {
  mascotas:Mascota[];
  m:Mascota;
  constructor(private ms:MascotaService,private router:Router) {
    this.getListadoventa();
   }

  ngOnInit() {
  
  }
  getListadoventa(){
    this.ms.getListado().subscribe(resultado=>{this.mascotas=resultado});
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
