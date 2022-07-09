import { Component, OnInit } from '@angular/core';
import { ConsultabdService, Datos } from 'src/app/servicios/consultabd.service';
import { InsertarbdService } from 'src/app/servicios/insertarbd.service';

@Component({
  selector: 'app-horas',
  templateUrl: './horas.component.html',
  styleUrls: ['./horas.component.scss']
})
export class HorasComponent implements OnInit {

  lista:Datos[] = [];
  constructor(private insertarbd:InsertarbdService) { }

  ngOnInit(): void { this.EjecutaConsulta();
  }

  EjecutaConsulta(){
   // this.insertarbd.agregarBD().subscribe(
    //res => {this.lista = res});
  }

}
