import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActualizarbdService, Datos } from 'src/app/servicios/actualizarbd.service';


@Component({
  selector: 'app-insertarhr',
  templateUrl: './insertarhr.component.html',
  styleUrls: ['./insertarhr.component.scss']
})
export class InsertarhrComponent implements OnInit {

  lista:Datos = {
    id_hremp:0,
    usuario:0,
    hora:0,
    dia:0,
  };

  constructor(private actualizabd:ActualizarbdService, private router: Router,
    private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.actualizabd.consultaBd();
    const id_entrada = <number>this.activeRoute.snapshot.params['id'];
  }

  EjecutaConsulta(){
    this.actualizabd.actualizarBD( <number>this.lista.id_hremp, this.lista).subscribe(
    res => {this.lista = res});
   }



}
