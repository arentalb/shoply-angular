import {Component, OnInit} from '@angular/core';
import {CartService} from "../../../services/cart.service";

@Component({
  selector: 'app-cart-checkout',
  templateUrl: './cart-checkout.component.html',
  styleUrls: ['./cart-checkout.component.css']
})
export class CartCheckoutComponent implements OnInit {

  total = 1

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.total = this.cartService.totalCost

    this.cartService.totalCostEvent.subscribe((total) => {
      this.total = total
    })
  }

}
