import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ItemListComponent } from '../item-list/item-list.component';
import { Product } from '../../models/Product';

@Component({
  selector: 'app-add-item',
  standalone: true,
  imports: [FormsModule, ItemListComponent],
  templateUrl: './add-item.component.html',
  styleUrl: './add-item.component.scss'
})
export class AddItem implements OnInit {
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
