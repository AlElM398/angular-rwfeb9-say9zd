import { HttpClient } from '@angular/common/http';
import { Product } from './products'; //import product interface
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = []; //define an items property to store the array of the current products in the cart

  //define methods to add items to the cart
  addToCart(product: Product) {
    this.items.push(product);
  }

  //return cart items
  getItems() {
    return this.items;
  }

  //clear the cart items
  clearCart() {
    this.items = [];
    return this.items;
  }
}
