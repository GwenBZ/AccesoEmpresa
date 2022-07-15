import { Router, ActivatedRoute, Params } from '@angular/router';
import { AddDepartamentoComponent } from '../add-departamento/add-departamento.component';
import { Component, OnInit } from '@angular/core';
import { Depa, ServicioDepService } from 'src/app/services/servicio-dep.service';
import { MatDialog } from '@angular/material/dialog';
import { ModificarDepartamentoComponent } from '../modificar-departamento/modificar-departamento.component';

@Component({
  selector: 'app-departamento',
  templateUrl: './departamento.component.html',
  styleUrls: ['./departamento.component.scss']
})
export class DepartamentoComponent implements OnInit {

  ListaDep: any = [];
  departamento: Depa = {
    id_Departamento: 0,
    descripcion: '',
  };


  constructor(private activeRoute: ActivatedRoute, private servicioDep: ServicioDepService, private dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
    this.servicioDep.getDepartamentos().subscribe((depa) => {
      this.ListaDep = depa;
    });
  
  }
  //
  Eliminar(id: number | string, i: any) {
    this.servicioDep.deleteDepartamento(id).subscribe((item) => {
      console.log(item);
      this.ListaDep.splice(i, 1);
    }, err => console.log(err)
    );
  }
  add() {
    this.dialog.open(AddDepartamentoComponent);
  }
  compModificar(valor:any) {
    // this.dialog.open(ModificarDepartamentoComponent);
    this.servicioDep.editDepa(valor, this.departamento).subscribe(  res=>{
      console.log(res);
                },
                err=>console.log(err)
              );
      this.router.navigate(['Departamento/', valor]);    
    }
  

}
