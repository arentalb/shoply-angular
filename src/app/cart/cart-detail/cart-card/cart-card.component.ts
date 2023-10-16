import {Component, Input} from '@angular/core';
import {CartItem} from "../../../models/cart-item";

@Component({
  selector: 'app-cart-card',
  templateUrl: './cart-card.component.html',
  styleUrls: ['./cart-card.component.css']
})
export class CartCardComponent {

  @Input() cartProduct: CartItem
}
