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


}

