import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BorrarbdService {
  
  URL = 'http://localhost:4000/login/borrar/:id';
  constructor(private http:HttpClient) {console.log("SERVICIO CORRIENDO") }
  borrarBd():Observable<any> {
    return this.http.delete(this.URL);}
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

