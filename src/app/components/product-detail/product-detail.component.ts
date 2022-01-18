import { Component, OnInit } from '@angular/core';
import {ContentfulService} from "../../services/contentful.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {Entry} from "contentful";
import {switchMap} from "rxjs";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  public product: Entry<any> | undefined;

  constructor(private contentfulService: ContentfulService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap
      .pipe(switchMap((params: ParamMap) => this.contentfulService.getProduct(params.get('slug'))))
      .subscribe(product => this.product = product);
  }

}
