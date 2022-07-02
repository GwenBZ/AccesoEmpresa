// @ts-ignore
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

// @ts-ignore
@Component({
  selector: 'app-recover',
  templateUrl: './recover.component.html',
  styleUrls: ['./recover.component.css']
})
export class RecoverComponent implements OnInit {
  private Email: any;

  constructor() { }

  ngOnInit(): void {
  }

   onselectFile({e}: { e: any }){
    if (e.target.files){
      let reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=(event:any)=>{
        this.Email=event.target.result;
      }
    }
  }

  InicializaDatos(){
    this.Email = new FormGroup({
      nombre : new FormControl('@hotmail.com',[Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\\.+com$')]),
      password : new FormControl("123"),
      //postal: new FormControl("0", [Validators.pattern('[0-9]*'), Validators.maxLength(4)]),
      firstName : new FormControl('Adán',[Validators.pattern('^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$')]),
      apellido : new FormControl('-',[Validators.pattern('^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$')]),
      numeroEmpleado: new FormControl('0', [Validators.min(1),Validators.max(9999999)])

    });
  }





}
