import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {
  url='http://localhost:4500/login/bd/log2';
  constructor() { }
}
