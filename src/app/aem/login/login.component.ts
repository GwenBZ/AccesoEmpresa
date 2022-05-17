import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  Recover(){
    this.route.navigate(['/navbar/Recover']);
  }
  Administrarcitas(){
    this.route.navigate(['/navbar/Administrarcitas']);
  }

}


}
