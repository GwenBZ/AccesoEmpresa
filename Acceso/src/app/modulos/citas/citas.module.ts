import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorarioCitaComponent } from './horario-cita/horario-cita.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistroComponent } from './registro/registro.component';




@NgModule({
  declarations: [
    HorarioCitaComponent,
    RegistroComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CitasModule { }
