import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Datos{
  id_hora?: number;
  hora_inicial?: string;
  hora_final?: string;
  tipo?: string;
}

@Injectable({
  providedIn: 'root'
})
export class InsertarbdService {

  URL = 'http://localhost:4000/login/base/inser';
  constructor(private http:HttpClient) 
  { console.log("SERVICIO CORRIENDO")}

agregarBD(dt:Datos):Observable<any> {
  return this.http.post(this.URL, dt);}
}



