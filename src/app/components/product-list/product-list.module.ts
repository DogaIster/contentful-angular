import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductListComponent} from "./product-list.component";
import {RouterModule} from "@angular/router";
import {MatCardModule} from "@angular/material/card";

@NgModule({
  declarations: [ProductListComponent],
  exports: [ProductListComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule
  ]
})
export class ProductListModule { }
