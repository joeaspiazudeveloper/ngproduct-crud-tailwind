import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductsListComponent } from '../products-list/products-list.component';
import { Product } from '../../constants/Product';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [FormsModule, ProductsListComponent],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss'
})
export class ProductFormComponent implements OnInit {
  products: Product[] = [];
  newProduct: string = '';
  constructor() { }
  ngOnInit(): void {
  }
  addProduct() {
    if (this.newProduct.trim() !== '') {
      const newTask: Product = {
        name: this.newProduct,
        completed: false
      };
      this.products.push(newTask);
      this.newProduct = '';
    }
  }
}
