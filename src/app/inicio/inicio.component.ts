import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User, UserService } from '../user.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  user: User = {} as User;
  base = 2;
  exponente = 3;
  constructor(public userService: UserService, private router: Router) {
    this.user = userService.user;
  }

  ngOnInit(): void {}

  gotoAccount() {
    this.router.navigate(['account']);
  }
}
