import {Injectable} from '@angular/core';
import {Product} from "../models/product";

@Injectable({
  providedIn: 'root'
})
export class FavorateService {

  constructor() {
  }

  favorateProducts: Product[] = []

  getFavorateProducts() {
    return this.favorateProducts
  }

  addToFavorate(product: Product) {
    const existingProductIndex =
      this.favorateProducts.findIndex(item => item.id === product.id);
    if (existingProductIndex === -1) {
      this.favorateProducts.push(product);

    }
  }

  removeFromFavorate(product: Product) {
    let index = this.favorateProducts.findIndex((pro) => pro === product);

    if (index !== -1) {
      this.favorateProducts.splice(index, 1);
    }

  }

}
