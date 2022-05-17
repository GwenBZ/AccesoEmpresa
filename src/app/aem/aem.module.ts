import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AemRoutingModule } from './aem-routing.module';
import { AdministrarcitasComponent } from './administrarcitas/administrarcitas.component';


@NgModule({
  declarations: [
    AdministrarcitasComponent
  ],
  imports: [
    CommonModule,
    AemRoutingModule
  ]
})
export class AemModule { }
