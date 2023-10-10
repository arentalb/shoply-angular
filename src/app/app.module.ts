import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { SaleComponent } from './sale/sale.component';
import { CartComponent } from './cart/cart.component';
import { ErrorComponent } from './error/error.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PopularItemComponent } from './home/popular-item/popular-item.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { NewArrivalsComponent } from './home/new-arrivals/new-arrivals.component';
import { FollowUsComponent } from './home/follow-us/follow-us.component';
import { CartDetailComponent } from './cart/cart-detail/cart-detail.component';
import { FavorateDetailComponent } from './cart/favorate-detail/favorate-detail.component';
import { CartCardComponent } from './cart/cart-detail/cart-card/cart-card.component';
import { CartCheckoutComponent } from './cart/cart-detail/cart-checkout/cart-checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    SaleComponent,
    CartComponent,
    ErrorComponent,
    HeaderComponent,
    FooterComponent,
    PopularItemComponent,
    ProductCardComponent,
    NewArrivalsComponent,
    FollowUsComponent,
    CartDetailComponent,
    FavorateDetailComponent,
    CartCardComponent,
    CartCheckoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
