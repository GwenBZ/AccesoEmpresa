import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {EquipoService,Datos} from '../../SERVICES/equipo.service'

@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.css']
})
export class ConsultarComponent implements OnInit {

  ListarDatos: Datos[];

  constructor() { }

  ngOnInit(): void {
  }

}
