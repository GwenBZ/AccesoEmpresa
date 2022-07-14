import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ConsultarComponent } from './loginbackend/consultar/consultar.component';
//import { AemComponent } from './recover/aem/aem.component';


@NgModule({
  declarations: [
    AppComponent,
    ConsultarComponent,
    //AemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

