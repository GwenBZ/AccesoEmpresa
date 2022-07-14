import { Component, OnInit} from '@angular/core';
import {FormsModule, FormControl, FormGroup, Validators} from "@angular/forms";
import {EmpleadoService, Departamento, Empleado, Roles} from "../../service/empleado.service";
import { Router} from '@angular/router';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {
  datos : any;
  url="./assets/us.png";

//Variable
  ListarDepartamento: Departamento[];
  ListarRoles: Roles[];
  time = new Date().getFullYear() - new Date().getFullYear();
  empleado: Empleado = {
    id_empleado: '',
    nombre: '',
    ap_paterno: '',
    ap_materno: '',
    sexo: 'F',
    edad: this.time,
    fecha_nacimiento: '2000-05-02',
    telefono: '',
    correo: '',
    colonia: '',
    calle: '',
    cp: '',
    id_rol: '1',
    id_departamento: '1'
  };

  constructor(private EmpleadoService:EmpleadoService, private router:Router) {
    this.InicializaDatos();
  }

  ngOnInit(): void {
    this.listarDepartamento();
    this.listarRol();
  }
  nacimiento:any;
  verLista(){
    console.log(this.empleado);
    console.log(this.nacimiento);
  }

  listarDepartamento()
  {

    this.EmpleadoService.getDepartamento().subscribe(
      res=>{
        this.ListarDepartamento=<any>res;
        console.log('Los departamentos son: '+this.ListarDepartamento);
      },
      err => console.log(err)
    );
  }

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

  agregar() {
    //delete this.equipo.id_usuario;

    this.EmpleadoService.addEmpleado(this.empleado).subscribe();
    this.router.navigate(['/Citas']);
  }

  onselectFile({e}: { e: any }){
    if (e.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=(event:any)=>{
        this.url=event.target.result;
      }
    }
  }
  myGroup:any;
  InicializaDatos(){

    this.datos = new FormGroup({
      nacimiento : new FormControl(),
      telefono : new FormControl('5567189010',[Validators.required, Validators.pattern('^[0-9]+[0-9]+[0-9]+[0-9]+[0-9]+[0-9]+[0-9]+[0-9]+[0-9]+[0-9]$'), Validators.maxLength(10)]),
      nombre : new FormControl('@hotmail.com',[Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\\.+com$')]),
      //password : new FormControl("123"),
      //postal: new FormControl("0", [Validators.pattern('[0-9]*'), Validators.maxLength(4)]),
      firstName : new FormControl('Adán',[Validators.pattern('^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$')]),
      apellidop : new FormControl('-',[Validators.pattern('^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$')]),
      apellidom : new FormControl('--',[Validators.pattern('^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$')]),
      //numeroEmpleado: new FormControl('0', [Validators.min(1),Validators.max(9999999)]),
      calle : new FormControl('calle',[Validators.pattern('^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$')])

    });
  }
  onSelected(e:any): void {
    this.empleado.id_departamento=e.target.value;
  }
  onSelectedRoles(e:any): void {
    this.empleado.id_rol=e.target.value;
  }
  onSelectedSexo(e:any): void {
    this.empleado.sexo=e.target.value;
  }
  f='F';
  m='M';
}
