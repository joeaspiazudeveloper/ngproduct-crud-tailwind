import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Product } from '../../models/Product';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.scss'
})
export class ItemListComponent {
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
