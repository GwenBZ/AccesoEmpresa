import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AemRoutingModule } from './aem-routing.module';
import { AdministrarcitasComponent } from './administrarcitas/administrarcitas.component';
import { LoginComponent } from './login/login.component';
import { Citas2Component } from './citas2/citas2.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { Citas3Component } from './citas3/citas3.component';
import { Empresas3Component } from './empresas3/empresas3.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SolicitarCitaComponent } from './solicitar-cita/solicitar-cita.component';
import { BorrarComponent } from './borrar/borrar.component';
import { ConsultarComponent } from './consultar/consultar.component';


@NgModule({
  declarations: [
    AdministrarcitasComponent,
    LoginComponent,
    Citas2Component,
    RegistrarComponent,
    Citas3Component,
    Empresas3Component,
    NavbarComponent,
    SolicitarCitaComponent,
    BorrarComponent,
    ConsultarComponent
  ],
  imports: [
    CommonModule,
    AemRoutingModule
  ]
})
export class AemModule { }
