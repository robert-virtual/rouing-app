import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User, UserService } from '../user.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent implements OnInit {
  user: User = {} as User;
  constructor(public userService: UserService, private router: Router) {
    this.user = userService.user;
  }

  ngOnInit(): void {}
}
