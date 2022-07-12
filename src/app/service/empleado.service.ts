import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  url='http://localhost:3000/empleados';
  constructor(private http: HttpClient) { }

//get departamentos
  getDepartamento()
  {
    return this.http.get("http://localhost:3000/empleados/departamento");
  }

  //get departamentos
  getRoles()
  {
    return this.http.get("http://localhost:3000/empleados/roles");
  }

  //get equipos
  getEmpleados()
  {
    return this.http.get(this.url+'/read');
  }

  //get un Equipo
  getUnEmpleado(id:string){
    return this.http.get(this.url+'/'+id);
  }


  //agregar equipo
  addEmpleado(empleado:Empleado)
  {
    return this.http.post(this.url+"/create", empleado);
  }


  //eliminar
  deleteEmpleado(id:string){
    console.log('El id es: '+id)
    return this.http.delete(this.url+'/delete/'+ id);
  }

  //modificar equipo
  editEmpleado(id:string, empleado:Empleado){
    return this.http.put('http://localhost:3000/empleados/update/'+id, empleado);
  }



}

export interface Empleado{
  id_empleado: string;
  nombre?: string;
  ap_paterno?: string;
  ap_materno?: string;
  sexo?: string;
  edad?: number;
  fecha_nacimiento?: string;
  telefono?: string;
  correo?: string;
  colonia?: string;
  calle?: string;
  cp?: string;
  id_rol?: string;
  id_departamento?: string;
}
export interface Departamento{
  id_Departamento?: string;
  descripcion?: string;
}

export interface Roles{
  id_roles?: string;
  descripcion?: string;
}
