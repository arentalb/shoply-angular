import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {ProductsComponent} from "./products/products.component";
import {SaleComponent} from "./sale/sale.component";
import {CartComponent} from "./cart/cart.component";
import {ErrorComponent} from "./error/error.component";

const routes :Routes  =[
  {path :'' ,component : HomeComponent},
  {path :'products' ,component : ProductsComponent},
  {path :'sale' ,component : SaleComponent},
  {path :'cart' ,component : CartComponent},
  {path :'**' ,component : ErrorComponent},

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
