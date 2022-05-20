import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    FormComponent,
    NavbarComponent
  ],
  exports:[
    FormComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CitasModule { }
