import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../models/product";
import {CartService} from "../services/cart.service";
import {Size} from "../enums/size";
import {CartItem} from "../models/cart-item";
import {FavorateService} from "../services/favorate.service";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  constructor(private cartService: CartService, private favorateservice: FavorateService) {
  }

  @Input() product: Product

  psc: number = 1;
  showModal = false;
  defaultSize: string = ""

  ngOnInit() {
    this.defaultSize = this.product.sizes[0]
  }


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

  addToFavorate(product: Product) {
    this.favorateservice.addToFavorate(product)
    console.log("addes to favorate ")
    console.log(product)
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
