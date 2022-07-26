import { Component, OnInit } from '@angular/core';
import { ConsulasService,Datos,DatosId } from 'src/app/services/registroalterno/consulas.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registroalterno',
  templateUrl: './registroalterno.component.html',
  styleUrls: ['./registroalterno.component.css']
})
export class RegistroalternoComponent implements OnInit {

  lista:Datos[]=[];

  newregistro:DatosId={
    id_citav:0,
    nombrev:'',
    correov:'',
    id_fechasv:1,
    tiempo_citav:''
  };

  constructor(private consultaservicio:ConsulasService, private router:Router) {console.log('crud') }

  ngOnInit(): void {
    this.EjecutaConsulta();
  }

  EjecutaConsulta(){

    this.consultaservicio.consultaBd().subscribe(res=>{this.lista=res;
    }
    );console.log(this.lista); console.log("w");
  }
  
   InsertDato() {
    this.consultaservicio.insertarBd(this.newregistro).subscribe(res =>{this.newregistro=res;
    console.log(this.newregistro);
    this.EjecutaConsulta();
  }
  );
}

  UpdateDato() {
     this.consultaservicio.updateBd(this.newregistro).subscribe(res =>{this.newregistro=res;
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
