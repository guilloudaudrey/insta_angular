import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
username:string;
password:string;
connected:boolean;

  constructor(private auth:AuthService) {

   }

  ngOnInit() {
  }

  login(){
    this.auth.login(this.username, this.password).subscribe(logged => this.connected = logged)
  }

  logout(){
    this.auth.logout();
    this.connected = false;
  }

}
