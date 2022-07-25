import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConsultacitaService,Datos,DatosId } from 'src/app/services/citascrud/consultacita.service';



@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  lista:Datos[]=[];

  newregistro:DatosId={
    id_citav:0,
    nombrev:'',
    correov:'',
    id_fechasv:1,
    tiempo_citav:''
  };

  constructor(private consultaservicio:ConsultacitaService, private router:Router) {console.log('crud') }


  ngOnInit(): void {
  }

  EjecutaConsulta(){

    this.consultaservicio.consultaBd().subscribe(res=>{this.lista=res;
    }
    );
  }
  
   InsertDato() {
    this.consultaservicio.insertarBd(this.newregistro).subscribe(res =>{this.newregistro=res;
    console.log(this.newregistro);
    this.EjecutaConsulta();
  }
  );
}

  Delete(id:number){
     console.log(id);
     this.consultaservicio.DeleteBd(id).subscribe(res=>{console.log('servicio');
     this.EjecutaConsulta(); })
  }


}

