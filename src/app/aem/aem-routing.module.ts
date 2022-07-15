import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'Departamento', component: DepartamentoComponent },
  { path: 'Departamento/:id', component: DepartamentoComponent },
  { path: 'edit/:id', component: ModificarDepartamentoComponent },
  { path: 'EmpleadoDepartamentos', component: EmpDepartamentoComponent },
  { path: 'add', component: AddDepartamentoComponent },
  { path: 'UsuarioDepartamentos', component: UserDepartamentoComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AemRoutingModule { }
