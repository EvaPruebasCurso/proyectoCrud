import { Component, OnInit } from '@angular/core';
import { MascotaService } from '../../Servicios/mascota.service';
import { Mascota } from '../../Interfaces/mascota';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.css']
})
export class AltaComponent implements OnInit {
  m:Mascota={nombre:'',tipo:'',precio:0};

  constructor(private ms:MascotaService, private router:Router) { }

  ngOnInit() {
  }

  getAlta(){
    this.ms.getAlta(this.m).subscribe(resultado=>{this.m=resultado});
    this.router.navigate(['listadomascota']);

  }

}
