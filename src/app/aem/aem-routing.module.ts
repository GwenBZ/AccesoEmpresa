import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegistrarComponent} from "./registrar/registrar.component";

import {Citas2Component} from "./citas2/citas2.component";
import {SolicitarCitaComponent} from "./solicitar-cita/solicitar-cita.component";
import {LoginComponent} from "./login/login.component";
import {RecoverComponent} from "./recover/recover.component";
import {AdministrarcitasComponent} from "./administrarcitas/administrarcitas.component";
import {EditarEmpleadoComponent} from "./editar-empleado/editar-empleado.component"
import {EmpleadoComponent} from "./empleado/empleado.component";

const routes: Routes = [
  {path: '',children:[{path:'Registrar',component:RegistrarComponent},
      {path: 'Citas2', component:Citas2Component},
      {path:'Solicitarcita', component:SolicitarCitaComponent},
      {path:'Salir', component:LoginComponent},
      {path:'Recover', component:RecoverComponent},
      {path:'Administrarcitas',component:AdministrarcitasComponent},
      {path: 'edit/:id',component:EditarEmpleadoComponent},
      {path: 'empleado',component:EmpleadoComponent},
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AEMRoutingModule { }
