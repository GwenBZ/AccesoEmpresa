import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AemRoutingModule } from './aem-routing.module';
import { AdministrarcitasComponent } from './administrarcitas/administrarcitas.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AdministrarcitasComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AemRoutingModule
  ]
})
export class AemModule { }
