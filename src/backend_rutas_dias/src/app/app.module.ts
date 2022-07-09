import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BorrarhrComponent } from './componentes/borrarhr/borrarhr.component';
import { HorasComponent } from './componentes/horas/horas.component';

@NgModule({
  declarations: [
    AppComponent,
    HorasComponent,
    BorrarhrComponent
 ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
