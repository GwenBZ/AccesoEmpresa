import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActualizarbdService {

  URL = 'http://localhost:4000/login/base';
  constructor(private http:HttpClient) { console.log("SERVICIO CORRIENDO")}
  consultaBd():Observable<any> {
    return this.http.get(this.URL);}
  actualizarBD(id:number, lista:Datos) {
    return this.http.put<Datos>(this.URL+"/"+id, lista);}
}

export interface Datos{
  id_hremp?: number;
  usuario?: number;
  hora?: number;
  dia?: number;
}