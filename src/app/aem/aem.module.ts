import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AemRoutingModule } from './aem-routing.module';
import { AdministrarcitasComponent } from './administrarcitas/administrarcitas.component';
import { LoginComponent } from './login/login.component';
import { Citas2Component } from './citas2/citas2.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SolicitarCitaComponent } from './solicitar-cita/solicitar-cita.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { EditarEmpleadoComponent } from './editar-empleado/editar-empleado.component';


@NgModule({
  declarations: [
    AdministrarcitasComponent,
    LoginComponent,
    Citas2Component,
    RegistrarComponent,
    NavbarComponent,
    SolicitarCitaComponent,
    EmpleadoComponent,
    EditarEmpleadoComponent
  ],
  imports: [
    CommonModule,
    AemRoutingModule
  ]
})
export class AemModule { }
