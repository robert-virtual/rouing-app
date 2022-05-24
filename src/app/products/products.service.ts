import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../users/users.service';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}
  productsUrl = 'https://gostorte.herokuapp.com/products';
  getAll() {
    return this.http.get<IProduct[]>(this.productsUrl);
  }
  create(product: IProduct) {
    return this.http.post(this.productsUrl, product);
  }
}

export interface IProduct {
  id?: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  userId?: string;
  user?: IUser;
  images?: IImage[];
  createdAt: string;
}
export interface IImage {
  id?: string;
  url: string;
  productId?: string;
}
