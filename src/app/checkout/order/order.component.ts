import {Component, OnInit} from '@angular/core';
import {CartService} from "../../services/cart.service";
import {CartItem} from "../../models/cart-item";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  productsInTheCart: CartItem[] = []

  constructor(private cardService: CartService) {

  }

  subTotal: number = 0
  tax: number = 0
  total: number = 0
  discountPercentage: number = 0
  grandTotal: number = 0
  coupon: string = ''

  ngOnInit(): void {
    this.productsInTheCart = this.cardService.productsInCart
    this.calculateCosts()
    this.calculateTax()
  }

  applyCuppon(coupon: string) {
    if (coupon === 'abc10') {
      this.discountPercentage = 0.1;
      this.coupon = 'abc10'
    } else if (coupon === 'abc20') {
      this.discountPercentage = 0.15;
      this.coupon = 'abc20'
    } else {
      this.discountPercentage = 0;
      this.coupon = '';
   
    }
    this.grandTotal = this.calculateTotal();
  }

  calculateTotal() {
    this.total = this.subTotal + this.tax;
    console.log(this.total * (1 - this.discountPercentage))
    return this.total * (1 - this.discountPercentage);
  }


  calculateCosts() {
    this.subTotal = 0;
    for (const item of this.productsInTheCart) {
      const productPrice = item.product.price;
      const quantity = item.quantity;
      this.subTotal += productPrice * quantity;
    }


  }

  calculateTax() {
    if (this.subTotal > 0 && this.subTotal <= 100) {
      this.tax = 0;
    } else if (this.subTotal > 100 && this.subTotal < 200) {
      this.tax = this.subTotal / 10;
    } else if (this.subTotal > 200 && this.subTotal < 300) {
      this.tax = this.subTotal / 20;
    } else {
      this.tax = this.subTotal / 30;
    }
    this.total = this.subTotal + this.tax
    this.grandTotal = this.total

  }
}
