import { Component, OnInit } from '@angular/core';
import {ContentfulService} from "../../services/contentful.service";
import { Entry } from 'contentful';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  public products: Entry<any>[] = [];

  constructor(private contentfulService: ContentfulService) {
  }

  ngOnInit(): void {
    this.contentfulService.getProducts()
      .then(products => this.products = products)
  }
}
