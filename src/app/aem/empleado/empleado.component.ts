import { Component, OnInit } from '@angular/core';
import {EmpleadoService, Empleado} from "../../service/empleado.service";
import { Router} from '@angular/router';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  ListarEmpleado: Empleado[];

  constructor(private EmpleadoService:EmpleadoService, private router:Router) {

  }

  ngOnInit(): void {

    this.listarEmpleado();
  }
  listarEmpleado()
  {
    this.EmpleadoService.getEmpleados().subscribe(
      res=>{
        console.log(res);
        this.ListarEmpleado=<any>res;
      },
      err => {console.log(err); console.log("Error jaja")}
    );
  }


  eliminar(id:string)
  {
    this.EmpleadoService.deleteEmpleado(id).subscribe(
      res=>{
        console.log('equipo eliminado');
        this.listarEmpleado();
      },
      err=> console.log(err)
    );
  }

  modificar(id:string){
    this.router.navigate(['edit/'+id]);
  }

}
