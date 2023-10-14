import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  pageName: string = "myCart";

  constructor(private activeRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.router.navigate(["myCart"], {relativeTo: this.activeRoute});
  }

  toggleTabs(currentPageName: string) {
    this.pageName = currentPageName
  }

}
