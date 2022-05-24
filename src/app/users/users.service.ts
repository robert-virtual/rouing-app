import { Injectable } from '@angular/core';
import { IProduct } from '../products/products.service';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor() {}
}

export interface IUser {
  id?: string;
  name: string;
  email: string;
  password: string;
  image: string;
  products?: IProduct[];
}
