import { Component, OnInit } from '@angular/core';
import { User } from '../shared/User';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fiche-user',
  templateUrl: './fiche-user.component.html',
  styleUrls: ['./fiche-user.component.css']
})
export class FicheUserComponent implements OnInit {
user:User;

constructor(private route:ActivatedRoute) { }

  ngOnInit() {
  }

}
