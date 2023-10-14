import { Component, Input } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-card-sale',
  templateUrl: './product-card-sale.component.html',
  styleUrls: ['./product-card-sale.component.css'],
})
export class ProductCardSaleComponent {
  @Input() product: Product;
}
