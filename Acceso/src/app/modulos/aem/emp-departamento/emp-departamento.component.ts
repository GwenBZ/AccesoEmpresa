import { Component, OnInit } from '@angular/core';
import { ServicioDepServiceService } from 'src/app/services/servicio-dep-service.service';

@Component({
  selector: 'app-emp-departamento',
  templateUrl: './emp-departamento.component.html',
  styleUrls: ['./emp-departamento.component.css']
})
export class EmpDepartamentoComponent implements OnInit {

 
  ListaemplDep:any=[];

  constructor(private ServicioDep:ServicioDepServiceService) { }

  ngOnInit(): void {
    this.ServicioDep.getEmpleado().subscribe((EmplDepas)=>{
      this.ListaemplDep=EmplDepas;  
  });

}

busqueda(depar:string){ 
  let res=this.buscar(depar);

  if (res.length<=0) {
    this.ListaemplDep=this.ServicioDep.getEmpleado();
  }else{
    this.ListaemplDep=res;
  }
}  
buscar(termino:string){
  let arr:any=[];
 this.ListaemplDep.forEach( (e:any) => {
   console.log(e.descripcion.indexOf(termino));
   if (e.descripcion.indexOf(termino)>=0) {
    arr.push(e);
   } });
   return arr;

}
}
