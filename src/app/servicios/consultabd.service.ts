
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
  id_hremp?: number;
  nombre?: string;
  apellidos?: string;
  descripcion?: string;
  inicial?:string;
  final?:string;
  tipo?:string;
  depto?:string;
}
