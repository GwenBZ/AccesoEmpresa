import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AemRoutingModule } from './aem-routing.module';
import { AdministrarcitasComponent } from './administrarcitas/administrarcitas.component';
import { LoginComponent } from './login/login.component';
import { Citas2Component } from './citas2/citas2.component';
import { RegistrarComponent } from './registrar/registrar.component';


@NgModule({
  declarations: [
    AdministrarcitasComponent,
    LoginComponent,
    Citas2Component,
    RegistrarComponent
  ],
  imports: [
    CommonModule,
    AemRoutingModule
  ]
})
export class AemModule { }
