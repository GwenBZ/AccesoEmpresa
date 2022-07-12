import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  Registrar() {
    this.route.navigate(['/navbar/Registrar']);
  }
  Citas(){
    this.route.navigate(['/navbar/Citas']);
  }
  Citas2(){
    this.route.navigate(['/navbar/Citas2']);
  }
  Solicitarcita(){
    this.route.navigate(['/navbar/Solicitarcita']);
  }
  Roles() {
    this.route.navigate(['/navbar/Roles']);
  }
  Salir(){
    this.route.navigate(['/navbar/Salir']);

  }

}
