import {EventEmitter, Injectable} from '@angular/core';
import {Country} from "../models/country";
import {NgForm} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor() {
  }

  private _isFormValid = false

  get ifFormValid(): boolean {
    return this._isFormValid;
  }

  set ifFormValid(value: boolean) {
    this._isFormValid = value;
  }

  shippmentDetail: EventEmitter<Country> = new EventEmitter<Country>()
  formValidDetector: EventEmitter<NgForm> = new EventEmitter<NgForm>()
  saveBtnValidator: EventEmitter<boolean> = new EventEmitter<boolean>()


  countries: Country[] = [
    {name: 'Iraq', phoneNumber: '+964'},
    {name: 'United States', phoneNumber: '+1'},
    {name: 'Canada', phoneNumber: '+1'},
    {name: 'United Kingdom', phoneNumber: '+44'},
    {name: 'Australia', phoneNumber: '+61'},
    {name: 'Germany', phoneNumber: '+49'},
    {name: 'France', phoneNumber: '+33'},
    {name: 'Japan', phoneNumber: '+81'},
    {name: 'China', phoneNumber: '+86'},
    {name: 'Brazil', phoneNumber: '+55'},
    {name: 'India', phoneNumber: '+91'}
  ];

}
