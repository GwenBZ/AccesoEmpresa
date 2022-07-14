import { Component, OnInit } from '@angular/core';
import { ConsultaserviciosService ,Datos, DatosId} from 'src/app/servicio/consultaservicios.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
 
  lista:Datos[]=[];
  registro:Datos[]=[];

  newregistro:DatosId={
    id_fechav:'01',
    id_usuariov:'02',
    diav:'Lunes',
    id_horariov:'01'
  };

constructor(private consultaservicio:ConsultaserviciosService, private router:Router) {console.log('s') }

ngOnInit(): void {
  this.EjecutaConsulta();
 
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
