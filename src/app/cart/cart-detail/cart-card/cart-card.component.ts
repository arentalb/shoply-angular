import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {CartItem} from "../../../models/cart-item";
import {CartService} from "../../../services/cart.service";
import {Product} from "../../../models/product";

@Component({
  selector: 'app-cart-card',
  templateUrl: './cart-card.component.html',
  styleUrls: ['./cart-card.component.css']
})
export class CartCardComponent implements OnInit {

  @Input() cardItem: CartItem

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {

  }

  deleteProduct(cartItem: CartItem) {
    this.cartService.deleteCartItem(cartItem)
  }

  decQuantity(cartItem: CartItem) {
    this.cartService.decQuantity(cartItem)

  }

  incQuantity(cartItem: CartItem) {
    this.cartService.incQuantity(cartItem)

  }

  CheckedOrNot: boolean = false


  toggleCheck() {
    this.CheckedOrNot = !this.CheckedOrNot

  }


}
