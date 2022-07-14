import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {
  url='http://localhost:4500/login/bd/log2';
  constructor(private http: HttpClient) { }
}
//OBTENER DATOS
getDatos()
{
  return this.http.get(this.url);
}
getdato(id:string){
  return this.http.get(this.url+'/'+id);
}

