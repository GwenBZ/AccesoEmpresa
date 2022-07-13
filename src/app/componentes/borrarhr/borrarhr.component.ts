import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BorrarbdService } from 'src/app/servicios/borrarbd.service';
import { ConsultabdService, Datos } from 'src/app/servicios/consultabd.service';

@Component({
  selector: 'app-borrarhr',
  templateUrl: './borrarhr.component.html',
  styleUrls: ['./borrarhr.component.scss']
})
export class BorrarhrComponent implements OnInit {

  lista:Datos[] = [];
  constructor(private consultabd:ConsultabdService, private borrarbd:BorrarbdService,
    private router:Router) { }

  ngOnInit(): void { this.EjecutaConsulta();
  }

  EjecutaConsulta(){
    this.consultabd.consultaBd().subscribe(
    res => {this.lista = res});

    this.borrarbd.borrarBd().subscribe(
      res => {this.lista = res});
  }
}
