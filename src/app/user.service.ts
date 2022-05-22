import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  #user: User = {
    name: 'Robert',
    hobbies: ['to code'],
    age: 21,
  };
  constructor() {}
  set user(value: User) {
    console.log('user update');
    this.user = value;
  }
  get user(): User {
    return this.#user;
  }
}
export interface User {
  name: string;
  age: number;
  hobbies: string[];
}
