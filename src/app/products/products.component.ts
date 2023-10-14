import {Component, OnInit} from '@angular/core';
import {Category} from "../enums/category";
import {Subcategory} from "../enums/subcategory";
import {Product} from "../models/product";
import {ProductService} from "../services/product.service";
import {CheckboxStates} from "../models/checkbox-states";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
   categories: Category[] = [Category.Men, Category.Women];
  subcategories: Subcategory[] =
    [Subcategory.Tshirt, Subcategory.Jeans,
      Subcategory.Shorts,Subcategory.Dresses,
      Subcategory.Jackets, Subcategory.Shoes];


  CategoriesState = false
  categoryStates: boolean[] = [];

  allProducts :Product[]

  checkboxStates: CheckboxStates ={};

  filteredCategories : string[] =[] ;



  constructor(private productService :ProductService) {}

  ngOnInit(){
    this.allProducts = this.productService.getAllProducts()
    this.categories.forEach((category) => {
      this.checkboxStates[category] = {};
      this.subcategories.forEach((subcategory) => {
        this.checkboxStates[category][subcategory] = false;
      });
    });
  }

  toggleCategories(){
    this.CategoriesState = !this.CategoriesState
  }

  toggleCategory(index: number): void {
    this.categoryStates[index] = !this.categoryStates[index];
  }

  isCategoryOpen(index: number): boolean {
    return this.categoryStates[index];
  }
  applyFilter(){
    // console.log('Checkbox States:', this.checkboxStates);
    this.allProducts = this.productService.getFilteredProducts(this.checkboxStates)
    this.filteredCategories = this.productService.getfilteredCategories()
  }
}


