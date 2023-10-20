import {Injectable} from '@angular/core';
import {Product} from "../models/product";
import {ProductService} from "./product.service";

@Injectable({
  providedIn: 'root'
})
export class FavorateService {

  constructor(private productservice: ProductService) {
  }

  favorateProducts: Product[] = []

  getFavorateProducts() {
    this.favorateProducts = this.productservice.getAllProducts()
    return this.favorateProducts
  }

  addToFavorate(product: Product) {

  }

  removeFromFavorate(product: Product) {
    let index = this.favorateProducts.findIndex((pro) => {
      pro === product
    })
    if (index !== -1) {
      this.favorateProducts.splice(index, 1);
    }
  }

}
