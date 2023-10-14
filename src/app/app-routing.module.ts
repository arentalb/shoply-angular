import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {ProductsComponent} from "./products/products.component";
import {SaleComponent} from "./sale/sale.component";
import {CartComponent} from "./cart/cart.component";
import {ErrorComponent} from "./error/error.component";
import {CheckoutComponent} from "./checkout/checkout.component";
import {FavorateDetailComponent} from "./cart/favorate-detail/favorate-detail.component";
import {CartDetailComponent} from "./cart/cart-detail/cart-detail.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'sale', component: SaleComponent},
  {
    path: 'cart', component: CartComponent, children: [
      {path: 'myCart', component: CartDetailComponent},
      {path: 'myFavorite', component: FavorateDetailComponent},
    ]
  },
  {path: 'checkout', component: CheckoutComponent},
  {path: '**', component: ErrorComponent},

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
