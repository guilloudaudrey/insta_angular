import { Component, OnInit } from '@angular/core';
import { UserAjaxService } from '../shared/user.service';
import { User } from '../shared/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  liste = [];
  user: User;

  constructor(private userAjaxService:UserAjaxService) {}

  ngOnInit() {
    this.userAjaxService.getAllUsers().subscribe((user)=>this.liste=user)
  }

  // addTodo() {
  //   this.userAjaxService.addUser(this.user)
  //   .then((user) => this.liste.push(user));
  // }

  // removeTodo(index:number) {
  //   this.userAjaxService.removeUser(this.user)
  //   .then(() => this.liste = this.liste.filter((user) => user.id !== index));
    
  // }

}
