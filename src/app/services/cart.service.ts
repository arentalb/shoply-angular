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
    this.calculateTotal()

  }

  deleteCartItem(cartItem: CartItem) {
    const index = this.productsInCart.indexOf(cartItem);

    if (index !== -1) {
      this.productsInCart.splice(index, 1);
      this.calculateTotal()

    }
  }


  decQuantity(cartItem: CartItem) {
    const foundItem = this.productsInCart.find(item => item === cartItem);

    if (foundItem && foundItem.quantity > 1) {
      foundItem.quantity--;
      this.calculateTotal()

    }
  }

  incQuantity(cartItem: CartItem) {
    const foundItem = this.productsInCart.find(item => item === cartItem);

    if (foundItem && foundItem.quantity < 5) {
      foundItem.quantity++;
      this.calculateTotal()
    }
  }

  totalCostEvent: EventEmitter<number> = new EventEmitter<number>();

  totalCost = 0

  calculateTotal() {
    this.totalCost = 0
    this.productsInCart.forEach((cartItem: CartItem) => {
      const itemTotal = cartItem.quantity * cartItem.product.price;
      this.totalCost += itemTotal;
    });
    this.totalCostEvent.next(this.totalCost)
  }
}

