import { Injectable } from '@angular/core';
import {ProductsDataService} from "./products-data.service";
import {CheckboxStates} from "../models/checkbox-states";
import {Product} from "../models/product";


@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private productDataService :ProductsDataService) {

  }

  getAllProducts(){
    return this.productDataService.productsInStock
  }

  private filteredCategories : string[] =[];

  getFilteredProducts(checkboxStates :CheckboxStates){

    const anyCheckboxSelected = Object.keys(checkboxStates).some(category =>
      Object.values(checkboxStates[category]).some(subcategory => subcategory)
    );

    this.filteredCategories =[]
    for (const arrayKey in checkboxStates) {
      if (checkboxStates.hasOwnProperty(arrayKey)) {
        const array = checkboxStates[arrayKey];

        for (const itemKey in array) {
          if (array.hasOwnProperty(itemKey)) {
            const value = array[itemKey];
            if (value === true ){
              this.filteredCategories.push(itemKey)
              // console.log(itemKey)
              if (this.filteredCategories.includes(arrayKey)) {
                this.filteredCategories.push(arrayKey)
                // console.log(arrayKey)
              }
            }
            // console.log(`${arrayKey}.  ${itemKey}: ${value}`);

          }
        }

      }
    }

    if (anyCheckboxSelected) {
    return this.productDataService.productsInStock.filter((product: Product) => {
      const category = product.category.toString();
      const subcategory = product.subcategory.toString();


      return checkboxStates[category] && checkboxStates[category][subcategory];
    });
    } else {
      return this.productDataService.productsInStock;
    }
  }

  getfilteredCategories(){
    return this.filteredCategories
  }

}
