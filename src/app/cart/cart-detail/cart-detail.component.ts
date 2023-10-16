import {Component, OnInit} from '@angular/core';
import {CartService} from "../../services/cart.service";
import {CartItem} from "../../models/cart-item";

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.css']
})
export class CartDetailComponent implements OnInit {

  allProductsInTheCart: CartItem [] = []

  constructor(private cartService: CartService) {

  }

  ngOnInit(): void {
    this.allProductsInTheCart = this.cartService.productsInCart
    console.log(this.allProductsInTheCart)
  }
}
