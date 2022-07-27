import { Component, OnInit } from '@angular/core';
import {Citas, RecaptchaService} from '../../service/recaptcha.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-citas2',
  templateUrl: './citas2.component.html',
  styleUrls: ['./citas2.component.css']
})
export class Citas2Component implements OnInit {

  citas:Citas={
    id_cita:'',
    nombre:'',
    id_fechas:'',
    tiempo_cita:'',
    inicia:'',
    termina:''
  }

  constructor(private RecaptchaService:RecaptchaService,private Router:Router) {}

  ngOnInit(): void {

  }

  agregar()
  {
    this.RecaptchaService.postCita(this.citas).subscribe();
    this.Router.navigate(['/Solicitarcita']);
  }


  url = "./assets/us.png";

  onselectFile({e}: { e: any }) {
    if (e.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event: any) => {
        this.url = event.target.result;
      }
    }
  }
}







