import { Component, OnInit } from '@angular/core';
import { MascotaService } from 'src/app/Servicios/mascota.service';
import { Mascota } from 'src/app/Interfaces/mascota';

@Component({
  selector: 'app-listadotipo',
  templateUrl: './listadotipo.component.html',
  styleUrls: ['./listadotipo.component.css']
})
export class ListadotipoComponent implements OnInit {
  mascotas:Mascota[];
  tipo:string=null;
  tabla:boolean;

  constructor(private ms:MascotaService) { }

  ngOnInit() {
  }
  getListadoTipo(){
    this.ms.getTipo(this.tipo).subscribe(datos=>{
      if(datos==null){
        this.tabla=false;
      }
      else{this.mascotas=datos, this.tabla=true}
    });
  }
}
