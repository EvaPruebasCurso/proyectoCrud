import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mascota } from '../Interfaces/mascota';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {
  path:string;
  constructor(private http:HttpClient) {
    this.path='http://localhost:8080/mascotas'; //La ruta que debemos poner en el Spring
   }
   getListado(){
     return this.http.get<Mascota[]>(this.path);
   }
   getUnico(id:number){
     return this.http.get<Mascota>(this.path+"/"+id);
   }
   getAlta(m:Mascota){
     return this.http.post<Mascota>(this.path,m);
   }
   getModificar(m:Mascota){
    return this.http.put<Mascota>(this.path+"/"+m.id,m);
   }
   getEliminar(id:number){
    return this.http.delete<Mascota>(this.path+"/"+id);
   }
}
