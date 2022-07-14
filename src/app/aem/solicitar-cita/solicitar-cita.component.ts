import { Component, OnInit } from '@angular/core';
import {Citas, RecaptchaService} from '../../service/recaptcha.service';
import {Router} from '@angular/router';
import {HttpClient} from "@angular/common/http";
@Component({
  selector: 'app-solicitar-cita',
  templateUrl: './solicitar-cita.component.html',
  styleUrls: ['./solicitar-cita.component.css']
})
export class SolicitarCitaComponent implements OnInit {
  ListarCitas:Citas[];
  constructor(private RecaptchaService:RecaptchaService,private Router:Router,private http:HttpClient) {}

  ngOnInit(): void {
    this.listarCitas();
  }

  listarCitas(){
    this.RecaptchaService.consultaBD().subscribe(
      res =>{
        console.log(res)
        this.ListarCitas =<any>res;
      },
      err => console.log(err)
    );
  }

  modificar(id: string) {
    this.Router.navigate(['/citas3/' + id]);
  }

  delete(id:number){
    this.RecaptchaService.delete(id).subscribe(
      res=>{
        console.log('Dato Eliminado');
        this.listarCitas();
      },
      err=> console.log(err)
    );
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
