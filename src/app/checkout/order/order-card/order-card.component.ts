import {Component, Input} from '@angular/core';
import {CartItem} from "../../../models/cart-item";

@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.css']
})
export class OrderCardComponent {

  @Input() cardItem: CartItem
}
