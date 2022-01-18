import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductDetailComponent} from "./product-detail.component";
import {RouterModule} from "@angular/router";
import {MatCardModule} from "@angular/material/card";
import {MatTabsModule} from "@angular/material/tabs";

@NgModule({
  declarations: [ProductDetailComponent],
  exports: [ProductDetailComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatTabsModule
  ]
})
export class ProductDetailModule { }
