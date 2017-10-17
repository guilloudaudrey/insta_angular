import { Component, OnInit } from '@angular/core';
import { User } from '../shared/User';
import { ActivatedRoute } from '@angular/router';
import { UserAjaxService } from '../shared/user.service';

@Component({
  selector: 'app-fiche-user',
  templateUrl: './fiche-user.component.html',
  styleUrls: ['./fiche-user.component.css']
})
export class FicheUserComponent implements OnInit {
user:User;

constructor(private route:ActivatedRoute, private userService:UserAjaxService) { }


ngOnInit() {
  this.route.params
  .subscribe((params) => {
    if(parseInt(params.id) !== NaN) {
      this.userService.getUserById(params.id)
      .subscribe((user) => this.user = user)
    }else {
      this.user = null
    }
  });
  

}

}
