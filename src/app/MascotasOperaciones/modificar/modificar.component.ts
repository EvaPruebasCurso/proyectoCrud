import { Component, OnInit } from '@angular/core';
import { Mascota } from '../../Interfaces/mascota';
import { Router } from '@angular/router';
import { MascotaService } from '../../Servicios/mascota.service';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {
  m:Mascota;
  constructor(private ms:MascotaService, private router:Router) { }

  ngOnInit() {
    this.modificar();
  }
  modificar(){
    let id=localStorage.getItem("id");
    this.ms.getUnico(parseInt(id)).subscribe(datos=>{this.m=datos});
  }
  Actualizar(m:Mascota)
  {
    this.ms.getModificar(m).subscribe(datos=>{
      this.m=datos;
      this.router.navigate(["listadomascota"]);
    })
  }
}
