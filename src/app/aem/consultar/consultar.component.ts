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

  constructor(private EquipoService:EquipoService, private router: Router) {

  }

  ngOnInit(): void {
    this.listarDatos();
  }

  listarDatos()
  {
    this.EquipoService.getDatos().subscribe(
      res=>{
        console.log(res)
        this.ListarDatos=<any>res;
      },
      err => console.log(err)
    );

  }

}
