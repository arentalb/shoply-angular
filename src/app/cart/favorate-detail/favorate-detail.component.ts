import {Component, OnInit} from '@angular/core';
import {Product} from "../../models/product";
import {FavorateService} from "../../services/favorate.service";

@Component({
  selector: 'app-favorate-detail',
  templateUrl: './favorate-detail.component.html',
  styleUrls: ['./favorate-detail.component.css']
})
export class FavorateDetailComponent implements OnInit {

  favorateProducts: Product[] = []

  constructor(private favoirateService: FavorateService) {
  }

  ngOnInit(): void {
    this.favorateProducts = this.favoirateService.getFavorateProducts()

  }

}
