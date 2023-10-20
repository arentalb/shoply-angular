import {Component, OnInit} from '@angular/core';
import {CartService} from "../../../services/cart.service";

@Component({
  selector: 'app-cart-checkout',
  templateUrl: './cart-checkout.component.html',
  styleUrls: ['./cart-checkout.component.css']
})
export class CartCheckoutComponent implements OnInit {

  subtotal = 0
  tax: number = 0
  total = 0


  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.subtotal = this.cartService.totalCost
    this.calculateTax()
    this.cartService.totalCostEvent.subscribe((total) => {
      this.subtotal = total
      this.calculateTax()
    })
  }

  calculateTax() {
    if (this.subtotal > 0 && this.subtotal <= 100) {
      this.tax = 0;
    } else if (this.subtotal > 100 && this.subtotal < 200) {
      this.tax = this.subtotal / 10;
    } else if (this.subtotal > 200 && this.subtotal < 300) {
      this.tax = this.subtotal / 20;
    } else {
      this.tax = this.subtotal / 30;
    }
    this.total = this.subtotal + this.tax
  }
}
