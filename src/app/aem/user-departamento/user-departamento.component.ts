import { Component, OnInit } from '@angular/core';
import { ServicioDepService } from 'src/app/services/servicio-dep.service';

@Component({
  selector: 'app-user-departamento',
  templateUrl: './user-departamento.component.html',
  styleUrls: ['./user-departamento.component.scss']
})
export class UserDepartamentoComponent implements OnInit {

  ListaUserDep:any= [];
  departamento:string='';

  constructor(private servicioDep:ServicioDepService) { }

  ngOnInit(): void {
    this.servicioDep.userDepas().subscribe(( UserDep)=>{
      this.ListaUserDep=UserDep;  
      
    })
    
  }
 
  busqueda(descripcion:string){
    let res=this.buscar(descripcion);
    if (res.length<=0) {
      this.ListaUserDep=this.servicioDep.getDepartamentos();
    }else{
      this.ListaUserDep=res;
    }
  }
 
  buscar(termino:string){
    let arr:any=[];
   this.ListaUserDep.forEach( (e:any) => {
     console.log(e.descripcion.indexOf(termino));
     if (e.descripcion.indexOf(termino)>=0) {
      arr.push(e);
     }
     
   });
   
   return arr;
    
  }
  


}
