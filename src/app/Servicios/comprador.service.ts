import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comprador } from '../Interfaces/comprador';

@Injectable({
  providedIn: 'root'
})
export class CompradorService {
  path:string;
  constructor(private http:HttpClient) {
    this.path='http://localhost:8080/compradores'; 
   }
   getListado(){
     return this.http.get<Comprador[]>(this.path);
   }
   getUnico(dni:string){
     return this.http.get<Comprador>(this.path+"/"+dni);
   }
   getAlta(c:Comprador){
     
     return this.http.post<Comprador>(this.path,c);
   }
  }