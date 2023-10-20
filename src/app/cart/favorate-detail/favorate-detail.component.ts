import {Component} from '@angular/core';
import {Product} from "../../models/product";

@Component({
  selector: 'app-favorate-detail',
  templateUrl: './favorate-detail.component.html',
  styleUrls: ['./favorate-detail.component.css']
})
export class FavorateDetailComponent {

  favorateProducts: Product[] = []

}
