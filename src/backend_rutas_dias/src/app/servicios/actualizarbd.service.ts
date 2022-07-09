import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActualizarbdService {

  URL = 'http://localhost:4000/login/base/:id';
  constructor(private http:HttpClient) { console.log("SERVICIO CORRIENDO")}
  //actualizarbd():Observable<any> {
    //return this.http.put(this.URL);}
}

export interface Datos{
  id_hora?: number;
  hora_inicial?: string;
  hora_final?: string;
  tipo?: string;
}