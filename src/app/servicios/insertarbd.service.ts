import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class InsertarbdService {

  URL = 'http://localhost:4000/login/base/inser';
  constructor(private http:HttpClient) 
  { console.log("SERVICIO CORRIENDO")}

agregarBD(dt:Datos) {
  return this.http.post<Datos>(this.URL, dt);}
}


export interface Datos{
  id_hremp?: number;
  usuario?: number;
  hora?: number;
  dia?: number;
}

