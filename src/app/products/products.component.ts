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

  itemsPerPage = 12;
  currentPage = 1;
  totalPages: number[] = [] ;
  displayedProducts :Product[]=[]


  constructor(private productService :ProductService) {}

  ngOnInit(){
    this.allProducts = this.productService.getAllProducts()
    this.categories.forEach((category) => {
      this.checkboxStates[category] = {};
      this.subcategories.forEach((subcategory) => {
        this.checkboxStates[category][subcategory] = false;
      });
    });

    this.calculateNumberOfPages()
  }

  calculateNumberOfPages(){
    this.totalPages =[]
    let pages :number  = Math.ceil(this.allProducts.length / this.itemsPerPage);

    for (let a = 1 ; a <= pages ;a++ ){
      this.totalPages.push(a)
      console.log(pages)
    }
    this.paginate();
  }
  paginate() {
    // Logic to create a new array for the current page
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.displayedProducts = this.allProducts.slice(startIndex, endIndex);
  }

  onPageChange(pageNumber: number) {
    this.currentPage = pageNumber;
    this.paginate();
  }
  pageDown(){
    if (this.currentPage !== 1) {
      this.currentPage--
      this.paginate()
      console.log(this.totalPages.length)
    }
  }

  pageUp(){
    if (this.currentPage !== this.totalPages.length ){
      this.currentPage++
      this.paginate()
    }
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
    this.displayedProducts = this.productService.getFilteredProducts(this.checkboxStates)
    this.calculateNumberOfPages()
    this.filteredCategories = this.productService.getfilteredCategories()
  }
}


