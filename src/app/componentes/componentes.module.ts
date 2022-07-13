import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ComponentesRoutingModule } from './componentes-routing.module';
import { HorasComponent } from './horas/horas.component';
import { BorrarhrComponent } from './borrarhr/borrarhr.component';
import { InsertarhrComponent } from './insertarhr/insertarhr.component';


@NgModule({
  declarations: [
    HorasComponent,
    BorrarhrComponent,
    InsertarhrComponent
  ],
  exports: [
    HorasComponent,
    BorrarhrComponent,
    InsertarhrComponent
  ],
  imports: [
    CommonModule,
    ComponentesRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class ComponentesModule { }
