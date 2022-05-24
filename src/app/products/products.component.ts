import { Component, OnInit } from '@angular/core';
import { IProduct, ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  constructor(private productService: ProductsService) {}
  products: IProduct[] = [];
  image: string = '';

  newProduct: IProduct = {} as IProduct;
  ngOnInit(): void {
    this.productService.getAll().subscribe((data) => (this.products = data));
  }
  createProduct() {
    this.productService.create(this.newProduct).subscribe((data) => {
      console.log(data);
    });
  }
  addImage() {
    console.log('addImage');
    if (this.image) {
      console.log('image Added');
      if (!this.newProduct.images) {
        this.newProduct.images = [];
      }
      this.newProduct.images = [...this.newProduct.images, { url: this.image }];
      this.image = '';
    }
  }
}
