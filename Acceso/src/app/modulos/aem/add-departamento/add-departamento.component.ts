import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Depa, ServicioDepServiceService } from 'src/app/services/servicio-dep-service.service';

@Component({
  selector: 'app-add-departamento',
  templateUrl: './add-departamento.component.html',
  styleUrls: ['./add-departamento.component.css']
})
export class AddDepartamentoComponent implements OnInit {

  departamento:Depa = {
    id_Departamento:0,
    descripcion: '',
  };
 constructor( private servicioDep: ServicioDepServiceService, private router: Router, private dialog: MatDialog, private dialogRef: MatDialogRef<AddDepartamentoComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {

 }
 public closeMe() {
   this.dialogRef.close();
 }

 addDep() {
   delete this.departamento.id_Departamento;
   this.servicioDep.addDepartamento(this.departamento).subscribe();
   this.dialogRef.close();

 }
 ngOnInit(): void {   
 }
}
