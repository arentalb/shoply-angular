import {Component, OnInit} from '@angular/core';
import {CheckoutService} from "../../../services/checkout.service";
import {NgForm} from "@angular/forms";
import {Country} from "../../../models/country";

@Component({
  selector: 'app-shipping-address',
  templateUrl: './shipping-address.component.html',
  styleUrls: ['./shipping-address.component.css']
})
export class ShippingAddressComponent implements OnInit {

  constructor(private checkoutService: CheckoutService) {
  }

  isOpened = false
  allCountries: Country[] = []
  selectedCountry: Country = this.allCountries[0]


  ngOnInit(): void {
    this.allCountries = this.checkoutService.countries
    this.selectedCountry = this.allCountries[0]
  }

  toggleDropDown() {
    this.isOpened = !this.isOpened
  }

  selectCountry(country: Country) {
    this.selectedCountry = country
    this.isOpened = false
    this.checkoutService.shippmentDetail.emit(this.selectedCountry)

  }

  onSubmit(FORM: NgForm) {
    this.checkoutService.formValidDetector.emit(FORM)
    this.checkoutService.saveBtnValidator.emit(true)
  }

  textInter() {
    this.checkoutService.saveBtnValidator.emit(false)
  }

}
