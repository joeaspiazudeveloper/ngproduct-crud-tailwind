import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Product } from '../../constants/Product';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})
export class ProductsListComponent {
  @Input() products: Product[] = [];
  constructor() { }
  ngOnInit(): void {
  }
  removeProduct(product: Product) {
    const productIndex = this.products.indexOf(product);
    if (productIndex !== -1) {
      this.products.splice(productIndex, 1);
    }
  }
  toggleCompleted(product: Product) {
    product.completed = !product.completed;
  }
}
