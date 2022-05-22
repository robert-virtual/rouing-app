import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  firstName = '';
  lastName = '';

  constructor() {}

  ngOnInit(): void {}
}
