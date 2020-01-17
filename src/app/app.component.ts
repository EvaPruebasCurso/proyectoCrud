import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyectoCrud';

  constructor(private router:Router){

  }
  abrirListado(){
    this.router.navigate(["listado"]);
  }
  abrirAlta(){
    this.router.navigate(["alta"]);

  }
  abrirModificar(){
    this.router.navigate(["modificar"]);
  }
}
