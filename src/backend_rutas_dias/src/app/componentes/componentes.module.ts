import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentesRoutingModule } from './componentes-routing.module';
import { HorasComponent } from './horas/horas.component';
import { BorrarhrComponent } from './borrarhr/borrarhr.component';


@NgModule({
  declarations: [
    HorasComponent,
    BorrarhrComponent
  ],
  exports: [
    HorasComponent,
    BorrarhrComponent
  ],
  imports: [
    CommonModule,
    ComponentesRoutingModule
  ]
})
export class ComponentesModule { }
