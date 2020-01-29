import { Component, OnInit } from '@angular/core';
import { CompradorService } from 'src/app/Servicios/comprador.service';
import { Comprador } from 'src/app/Interfaces/comprador';
import { Router } from '@angular/router';
import { Mascota } from 'src/app/Interfaces/mascota';
import { MascotaService } from 'src/app/Servicios/mascota.service';
import { Historico } from 'src/app/Interfaces/historico';
import { HistoricoService } from 'src/app/Servicios/historico.service';


@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css']
})
export class VentaComponent implements OnInit {
  valor:number=0;
  c:Comprador;

  dni:string;
  nombre:string;
  apellido:string;
  direccion:string;
  localidad:string;
  correo:string;
  telefono:string;
  
  mascota:Mascota;
  h:Historico;

  constructor(private cs:CompradorService, private router:Router, private ms:MascotaService, private hs:HistoricoService) {
    this.dni='';
    this.nombre='';
    this.apellido='';
    this.direccion='';
    this.localidad='';
    this.correo='';
    this.telefono='';
   }

  ngOnInit() {
  }

  buscarDni(){
    this.cs.getUnico(this.dni).subscribe(dato=>{
      this.c=dato
      if(this.c!=null){this.valor=1}else{this.valor=2}
    });
  }
  vender(){
    let vend_username=localStorage.getItem("username");
    let id_mascota=parseInt(localStorage.getItem("id"));
    let nombre_mascota=localStorage.getItem("nombre");
    let tipo_mascota=localStorage.getItem("tipo");
    let precio_mascota=parseInt(localStorage.getItem("precio"));
    this.h={vend_username,id_mascota,nombre_mascota,tipo_mascota,precio_mascota};
    this.hs.getAlta(this.h).subscribe(dato=>{this.h=dato});
    this.ms.getEliminar(id_mascota).subscribe(dato=>{this.mascota=dato});
    this.valor=0;
    
  }
  dniCorrecto(){
    this.vender();
    alert("El comprador ya está registrado, la venta ha sido realizada con éxito")
    this.router.navigate(['listadoventa']);
  }
  dniRegistrar(){
    this.c={dni:this.dni, nombre:this.nombre,apellido:this.apellido, direccion:this.direccion,
    localidad:this.localidad,correo:this.correo,telefono:this.telefono};
    this.cs.getAlta(this.c).subscribe(dato1=>{this.c=dato1});
    this.vender();
    alert("El comprador se ha registrado y se ha hecho la venta con éxito")
    this.router.navigate(['listadoventa']);

  }
}
