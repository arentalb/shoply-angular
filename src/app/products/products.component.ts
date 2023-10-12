import { Component } from '@angular/core';
import {Category} from "../enums/category";
import {Subcategory} from "../enums/subcategory";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
   categories: Category[] = [Category.Men, Category.Women];
  subcategories: Subcategory[] =
    [Subcategory.Tshirt, Subcategory.Jeans,
      Subcategory.Shorts,Subcategory.Dresses,
      Subcategory.Jackets, Subcategory.Shoes];


  CategoriesState = false
  categoryStates: boolean[] = [];

  toggleCategories(){
    this.CategoriesState = !this.CategoriesState
  }

  toggleCategory(index: number): void {


    this.categoryStates[index] = !this.categoryStates[index];

  }

  isCategoryOpen(index: number): boolean {
    return this.categoryStates[index];
  }
  applyFiltter(){

  }
}

