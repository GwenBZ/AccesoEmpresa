import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConsulasService {


  URLConsulta='http://localhost:5000/login/cita';
  URLInsert='http://localhost:5000/login/crear/cita';
  URLDelete='http://localhost:5000/login/dltcita/';
  URLUpdate='http://localhost:5000/login/upcita';

  constructor(private http:HttpClient) 
    {

    
    }
  
      consultaBd():Observable<any>{
      return this.http.get(this.URLConsulta);}
  
      insertarBd(lista:DatosId){
      return this.http.post<DatosId>(this.URLInsert,lista);}
      
      updateBd(lista:DatosId){
      return this.http.put<DatosId>(this.URLUpdate,lista);}

      DeleteBd(id:number){
      return this.http.delete(this.URLDelete+id);}
  
  };
  
export interface Datos{
  
    id_cita:number,
    nombre?:string,
    correo?:string,
    empleado?:string,
    dia?:string,
    tiempo_cita?:string;
   
  };



  export interface DatosId{

    id_citav?:number,
    nombrev?:string,
    correov?:string,
    id_fechasv?:number,
    tiempo_citav?:string
  };
  