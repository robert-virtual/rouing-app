import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  age = 21;
  name = 'Robert';
  hobbies = ['programing'];
  constructor() {}
}

export interface User {
  name: string;
  age: number;
  hobbies: string[];
}
