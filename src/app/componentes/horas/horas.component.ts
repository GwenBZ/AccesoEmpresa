import { Component, OnInit, Inject } from '@angular/core';
import { InsertarbdService, Datos } from 'src/app/servicios/insertarbd.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-horas',
  templateUrl: './horas.component.html',
  styleUrls: ['./horas.component.scss']
})
export class HorasComponent implements OnInit {

  dt:Datos = {
    id_hremp:0,
    usuario:0,
    hora:0,
    dia:0,
  };

  constructor(private insertarbd:InsertarbdService, private router: Router) { }


  EjecutaConsulta(){
   this.insertarbd.agregarBD(this.dt).subscribe(
   res => {this.dt = res});
  }

  ngOnInit(): void { }

}
