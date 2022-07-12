import { Component, OnInit } from '@angular/core';
import {Departamento, EmpleadoService, Empleado, Roles} from "../../service/empleado.service";
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-editar-empleado',
  templateUrl: './editar-empleado.component.html',
  styleUrls: ['./editar-empleado.component.css']
})
export class EditarEmpleadoComponent implements OnInit {

  empleado=[{
    id_empleado: '',
    nombre: '',
    ap_paterno: '',
    ap_materno: '',
    sexo: '',
    edad: 0,
    fecha_nacimiento: '2000-05-02',
    telefono: '',
    correo: '',
    colonia: '',
    calle: '',
    cp: '',
    id_rol: '',
    id_departamento: ''
  }];

  constructor(private EmpleadoService:EmpleadoService,
              private router:Router,
              private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.listarDepartamento();
    this.listarRol();
    const id_entrada = <string>this.activeRoute.snapshot.params['id'];
    console.log('id de entrada: ' + id_entrada);


    if(id_entrada){
      this.EmpleadoService.getUnEmpleado(id_entrada).subscribe(
        res=>{
          this.empleado = <any>res ;
          console.log(this.empleado);
        },
        err=>console.log(err)
      );
    }
    if(this.empleado[0].sexo == 'F'){
      this.sexoEmpleado='F';
      this.sexoEmpleado2='M';
    }else{
      this.sexoEmpleado='M';
      this.sexoEmpleado2='F';
    }
  }

  modificar()
  {
    this.empleado[0].fecha_nacimiento='2000-05-02'
    this.EmpleadoService.editEmpleado(this.empleado[0].id_empleado, this.empleado[0]).subscribe(
      res=>{
        console.log(res);
      },
      err=>console.log(err)
    );

    this.router.navigate(['/Citas']);
  }

  onSelectedSexo(e:any): void {
    this.empleado[0].sexo=e.target.value;
  }
  sexoEmpleado='';
  sexoEmpleado2='';

  ListarDepartamento: Departamento[];
  listarDepartamento()
  {

    this.EmpleadoService.getDepartamento().subscribe(
      res=>{
        this.ListarDepartamento=<any>res;
      },
      err => console.log(err)
    );
  }
  ListarRoles: Roles[];
  listarRol()
  {

    this.EmpleadoService.getRoles().subscribe(
      res=>{
        this.ListarRoles=<any>res;
        console.log('Los roles son: '+this.ListarRoles);
      },
      err => console.log(err)
    );
  }
  onSelected(e:any): void {
    this.empleado[0].id_departamento=e.target.value;
  }
  onSelectedRoles(e:any): void {
    this.empleado[0].id_rol=e.target.value;
  }

}
