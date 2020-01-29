import { Component, OnInit } from '@angular/core';
import { Historico } from 'src/app/Interfaces/historico';
import { HistoricoService } from 'src/app/Servicios/historico.service';

@Component({
  selector: 'app-listadohistorico',
  templateUrl: './listadohistorico.component.html',
  styleUrls: ['./listadohistorico.component.css']
})
export class ListadohistoricoComponent implements OnInit {
  historicos:Historico[];
  constructor(private hs:HistoricoService) { 
    this.getListado();
  }

  ngOnInit() {
  }
  getListado(){
    this.hs.getListado().subscribe(datos=>{this.historicos=datos});
  }
  total():number{
    let resultado=0;
    for(let i=0;i<this.historicos.length;i++)
    {

     resultado+=this.historicos[i].precio_mascota;
    }
    return resultado;
  }
}
