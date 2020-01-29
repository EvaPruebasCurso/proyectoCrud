import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Historico } from '../Interfaces/historico';

@Injectable({
  providedIn: 'root'
})
export class HistoricoService {
  path:string;
  constructor(private http:HttpClient) {
    this.path='http://localhost:8080/historicos'; 
   }
   getListado(){
     return this.http.get<Historico[]>(this.path);
   }

   getAlta(h:Historico){
     return this.http.post<Historico>(this.path,h);
   }
}
