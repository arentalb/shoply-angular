import {EventEmitter, Injectable} from '@angular/core';
import {CartItem} from "../models/cart-item";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  productsInCart: CartItem[] = []

  constructor() {
  }

  addProduct(newProduct: CartItem) {
    this.productsInCart.push(newProduct)
  }

  deleteCartItem(cartItem: CartItem) {
    const index = this.productsInCart.indexOf(cartItem);

    if (index !== -1) {
      this.productsInCart.splice(index, 1);
    }
  }


  decQuantity(cartItem: CartItem) {
    const foundItem = this.productsInCart.find(item => item === cartItem);

    if (foundItem && foundItem.quantity > 1) {
      foundItem.quantity--;
    }
  }

  incQuantity(cartItem: CartItem) {
    const foundItem = this.productsInCart.find(item => item === cartItem);

    if (foundItem && foundItem.quantity < 5) {
      foundItem.quantity++;
    }
  }
}

