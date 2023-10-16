import {Injectable} from '@angular/core';
import {ProductsDataService} from './products-data.service';
import {CheckboxStates} from '../models/checkbox-states';
import {Product} from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private productDataService: ProductsDataService) {
  }

  private filteredCategories: { category: string, subCategory: string }[] = [];

  private filteredCategoriesForSale: string[] = [];

  getfilteredCategories() {
    return this.filteredCategories;
  }

  getfilteredCategoriesforsale() {
    return this.filteredCategoriesForSale;
  }

  getAllProducts() {
    return this.productDataService.productsInStock;
  }

  getAllProductsForSale() {
    return this.productDataService.productsInStock.slice(0, 5);
  }

  getFilteredProducts(checkboxStates: CheckboxStates) {
    const anyCheckboxSelected = Object.keys(checkboxStates).some((category) =>
      Object.values(checkboxStates[category]).some(
        (subcategory) => subcategory,
      ),
    );

    this.filteredCategories = [];
    for (const arrayKey in checkboxStates) {
      if (checkboxStates.hasOwnProperty(arrayKey)) {
        const array = checkboxStates[arrayKey];

        for (const itemKey in array) {
          if (array.hasOwnProperty(itemKey)) {
            const value = array[itemKey];
            if (value === true) {
              let obj: { category: string, subCategory: string }
                = {category: arrayKey, subCategory: itemKey}
              this.filteredCategories.push(obj);

              console.log("item key ")
              console.log(itemKey)
              // if (this.filteredCategories.includes(arrayKey)) {
              //   this.filteredCategories.push(arrayKey);
              //   console.log("array Key ")
              //   console.log(arrayKey)
              // }
              console.log(`${arrayKey}.  ${itemKey}: ${value}`);
            }
          }
        }
      }
    }

    if (anyCheckboxSelected) {
      return this.productDataService.productsInStock.filter(
        (product: Product) => {
          const category = product.category.toString();
          const subcategory = product.subcategory.toString();

          return (
            checkboxStates[category] && checkboxStates[category][subcategory]
          );
        },
      );
    } else {
      return this.productDataService.productsInStock;
    }
  }

  getFilteredProductsforSale(checkboxStates: CheckboxStates) {
    const anyCheckboxSelected = Object.keys(checkboxStates).some((category) =>
      Object.values(checkboxStates[category]).some(
        (subcategory) => subcategory,
      ),
    );

    this.filteredCategoriesForSale = [];
    for (const arrayKey in checkboxStates) {
      if (checkboxStates.hasOwnProperty(arrayKey)) {
        const array = checkboxStates[arrayKey];

        for (const itemKey in array) {
          if (array.hasOwnProperty(itemKey)) {
            const value = array[itemKey];
            if (value === true) {
              this.filteredCategoriesForSale.push(itemKey);
              // console.log(itemKey)
              if (this.filteredCategoriesForSale.includes(arrayKey)) {
                this.filteredCategoriesForSale.push(arrayKey);
                // console.log(arrayKey)
              }
            }
            // console.log(`${arrayKey}.  ${itemKey}: ${value}`);
          }
        }
      }
    }

    if (anyCheckboxSelected) {
      return this.getAllProductsForSale().filter((product: Product) => {
        const category = product.category.toString();
        const subcategory = product.subcategory.toString();

        return (
          checkboxStates[category] && checkboxStates[category][subcategory]
        );
      });
    } else {
      return this.getAllProductsForSale();
    }
  }
}
