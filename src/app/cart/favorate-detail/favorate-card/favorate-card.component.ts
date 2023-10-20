import {Component, Input, OnInit} from '@angular/core';
import {FavorateService} from "../../../services/favorate.service";
import {Product} from "../../../models/product";
import {ProductService} from "../../../services/product.service";
import {CartService} from "../../../services/cart.service";
import {CartItem} from "../../../models/cart-item";

@Component({
  selector: 'app-favorate-card',
  templateUrl: './favorate-card.component.html',
  styleUrls: ['./favorate-card.component.css']
})
export class FavorateCardComponent implements OnInit {


  @Input() product: Product

  constructor(private favorateService: FavorateService, private cartService: CartService) {
  }

  ngOnInit(): void {
    this.defaultSize = this.product.sizes[0]
  }

  deleteProduct(product: Product) {
    this.favorateService.removeFromFavorate(product)
  }

  psc: number = 1;
  showModal = false;
  defaultSize: string = ""


  selectSize(size) {
    this.defaultSize = size

  }

  show(product: Product) {
    this.showModal = true;

  }

  hide() {
    this.showModal = false;
  }

  addAndHide() {
    this.showModal = false;
    let pro: CartItem = {product: this.product, quantity: this.psc, selectedSize: this.defaultSize}
    this.cartService.addProduct(pro)

  }

  dec() {
    if (this.psc > 1) {
      this.psc--
    }
  }

  inc() {
    if (this.psc < 5) {
      this.psc++
    }
  }


}
