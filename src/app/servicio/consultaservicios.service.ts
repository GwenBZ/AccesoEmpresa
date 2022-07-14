import { Injectable } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConsultaserviciosService {

  URLConsulta='http://localhost:5000/login/fechas';
  URLInsert='http://localhost:5000/login/insertar/insert';
  URLDelete='http://localhost:5000/login/delete/';
  URLUpdate='http://localhost:5000/login/update';

  constructor(private http:HttpClient) 
    {

    console.log('servicio corriendo');
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
  
    Identificador:number;
    nombre?:string;
    dia?:number;
    inicial?:string;
    final?:string;
   
  };

  export interface DatosId{

    id_fechav?:string,
    id_usuariov?:string,
    diav?:string,
    id_horariov?:string
   
  };
  