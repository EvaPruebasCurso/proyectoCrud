import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../Interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  path:string;

  constructor(private http:HttpClient) { 
    this.path='http://localhost:8080/usuarios'; //La ruta del Spring
    
  }
  getListado(){
    return this.http.get<Usuario[]>(this.path);
  }
  getUnico(username:string){
    return this.http.get<Usuario>(this.path+"/"+username);
  }
  getAlta(u:Usuario){
    return this.http.post<Usuario>(this.path,u);
  }
  getModificar(u:Usuario){
   return this.http.put<Usuario>(this.path+"/"+u.username,u);
  }
  getEliminar(username:string){
   return this.http.delete<Usuario>(this.path+"/"+username);
  }
}
