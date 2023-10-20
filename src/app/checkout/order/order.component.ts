import {Component, OnInit} from '@angular/core';
import {CartService} from "../../services/cart.service";
import {CartItem} from "../../models/cart-item";
import {CheckoutService} from "../../services/checkout.service";
import {Country} from "../../models/country";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  productsInTheCart: CartItem[] = []

  constructor(private cardService: CartService, private checkoutService: CheckoutService) {

  }

  isFormValid = false
  isBtnSaved = false
  submitBtnState = false
  subTotal: number = 0
  tax: number = 0
  total: number = 0
  discountPercentage: number = 0
  grandTotal: number = 0
  coupon: string = ''
  availableCountries: Country[] = []
  shipmentCost: number = 12
  selectedCountry: Country

  ngOnInit(): void {
    this.productsInTheCart = this.cardService.productsInCart
    this.getCountries()
    this.selectedCountry = this.availableCountries[0]
    this.checkoutService.shippmentDetail.subscribe((selectedCountry: Country) => {
      this.selectedCountry = selectedCountry
      this.calculatePrice()
    })


    this.checkoutService.saveBtnValidator.subscribe((condition: boolean) => {
      this.isBtnSaved = condition
      this.checkValidate()
    })
    this.checkoutService.formValidDetector.subscribe((form: NgForm) => {
      this.isFormValid = form.valid

      this.checkValidate()
    })
    this.calculatePrice()

  }

  checkValidate() {
    if (this.isFormValid && this.isBtnSaved) {
      this.submitBtnState = true
    } else {
      this.submitBtnState = false
    }
  }

  calculatePrice() {
    this.subTotal = this.calculateSubTotal()
    this.tax = this.calculateTax()
    this.shipmentCost = this.calculateTheShippingCost(this.selectedCountry)
    this.total = this.subTotal + this.tax + this.shipmentCost
    this.grandTotal = this.calculatePriceAfterDiscount()
  }


  calculateSubTotal() {
    this.subTotal = 0;
    let sum = 0;
    for (const item of this.productsInTheCart) {
      const productPrice = item.product.price;
      const quantity = item.quantity;
      sum += productPrice * quantity;
    }
    return sum
  }

  calculateTax() {
    let tx = 0
    if (this.subTotal > 0 && this.subTotal <= 100) {
      tx = 0;
    } else if (this.subTotal > 100 && this.subTotal < 200) {
      tx = this.subTotal / 10;
    } else if (this.subTotal > 200 && this.subTotal < 300) {
      tx = this.subTotal / 20;
    } else {
      tx = this.subTotal / 30;
    }
    return tx
  }

  calculateTheShippingCost(country: Country) {
    let shipCo
    switch (country.name) {
      case this.availableCountries [0].name:
        shipCo = 12
        break;
      case this.availableCountries [1].name:
        shipCo = 15
        break;
      case this.availableCountries [2].name:
        shipCo = 13
        break;
      case this.availableCountries [3].name:
        shipCo = 20
        break;
      case this.availableCountries [4].name:
        shipCo = 8
        break;
      case this.availableCountries [5].name:
        shipCo = 24
        break;
      case this.availableCountries [7].name:
        shipCo = 28
        break;
      case this.availableCountries [8].name:
        shipCo = 4
        break;
      case this.availableCountries [9].name:
        shipCo = 32
        break;
      case this.availableCountries [10].name:
        shipCo = 40
        break;
    }

    return shipCo
  }

  calculatePriceAfterDiscount() {
    return this.total * (1 - this.discountPercentage);
  }

  applyCuppon(coupon: string) {
    if (coupon === 'abc10') {
      this.discountPercentage = 0.1;
      this.coupon = 'abc10'
    } else if (coupon === 'abc20') {
      this.discountPercentage = 0.15;
      this.coupon = 'abc20'
    } else {
      this.discountPercentage = 0;
      this.coupon = '';

    }
    this.calculatePrice()
  }


  getCountries() {
    this.availableCountries = this.checkoutService.countries
  }

  pay() {
    console.log(this.checkoutService.ifFormValid)
    console.log(" not disables ")
  }
}
