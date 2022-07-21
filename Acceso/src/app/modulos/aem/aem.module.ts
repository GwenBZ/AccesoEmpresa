import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { DepartamentoComponent } from './departamento/departamento.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { EmpDepartamentoComponent } from './emp-departamento/emp-departamento.component';
import { AddDepartamentoComponent } from './add-departamento/add-departamento.component';
import { UserDepartamentoComponent } from './user-departamento/user-departamento.component';

@NgModule({
  declarations: [
    DepartamentoComponent,
    EmpDepartamentoComponent,
    AddDepartamentoComponent,
    UserDepartamentoComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    FormsModule
  ]
})
export class AemModule { }
