import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDepartamentoComponent } from './modulos/aem/add-departamento/add-departamento.component';
import { DepartamentoComponent } from './modulos/aem/departamento/departamento.component';
import { EmpDepartamentoComponent } from './modulos/aem/emp-departamento/emp-departamento.component';
import { UserDepartamentoComponent } from './modulos/aem/user-departamento/user-departamento.component';

const routes: Routes = [
  { path: 'Departamento', component: DepartamentoComponent },
  { path: 'Departamento/:id', component: DepartamentoComponent },
  { path: 'EmpleadoDepartamentos', component: EmpDepartamentoComponent },
  { path: 'add', component: AddDepartamentoComponent },
  { path: 'UsuarioDepartamentos', component: UserDepartamentoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
