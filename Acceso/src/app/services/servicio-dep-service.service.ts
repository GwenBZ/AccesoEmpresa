import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioDepServiceService {
  url='http://localhost:3000/Dep/Departamentos';
  USERurl='http://localhost:3000/Dep/Departamento/usuarios';
  EmpURL='http://localhost:3000/Dep/Departamento/Empleados';
  constructor(private http: HttpClient) { }


  //get dep
  getDepartamentos()
  {
   return this.http.get(this.url);
  }
  //get un depa
  getdepartamento(id:string|number){
    return this.http.get(`http://localhost:3000/Dep/Departamentos/${id}`);
  }
    //modificar 
    editDepa(id:string|number, descripcion:Depa){
      return this.http.put(`http://localhost:3000/Dep/Departamentos/${id}`, descripcion);
    }
  //agregar 
  addDepartamento(descripcion:Depa)
  {
    return this.http.post(this.url, descripcion);
  }
  //eliminar
  deleteDepartamento(id:number| string){
    return this.http.delete(`http://localhost:3000/Dep/Departamentos/${id}`);
  }

//user dep
userDepas()
  {
   return this.http.get(this.USERurl);
  }

  //empleados dep
getEmpleado(){
  return this.http.get(this.EmpURL);
}



}
export interface Depa {
  id_Departamento?: number|string;
  descripcion?: String;
} 
