import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultabdService {

  URL = 'http://localhost:4000/login/base';
  constructor(private http:HttpClient) 
  { console.log("SERVICIO CORRIENDO")}
    consultaBd():Observable<any> {
      return this.http.get(this.URL);}
}

export interface Datos{
  id_hora?: number;
  hora_inicial?: string;
  hora_final?: string;
  tipo?: string;
}
