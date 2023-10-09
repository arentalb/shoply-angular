import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  close :boolean = true;
  burger :boolean= false;
  toggle(){
    this.burger = !this.burger
    this.close = !this.close
  }
}
