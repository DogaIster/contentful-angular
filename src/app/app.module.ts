import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {ContentfulService} from "./services/contentful.service";
import {ProductListComponent} from './components/product-list/product-list.component';
import {ProductListModule} from "./components/product-list/product-list.module";
import {ProductDetailModule} from "./components/product-detail/product-detail.module";
import {ProductDetailComponent} from "./components/product-detail/product-detail.component";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";

const routes: Routes = [
  {path: '', redirectTo: '/products', pathMatch: 'full'},
  {path: 'products', component: ProductListComponent},
  {path: 'products/:slug', component: ProductDetailComponent},
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes, {useHash: true}),
    ProductListModule,
    ProductDetailModule,
    BrowserAnimationsModule,
    MatToolbarModule
  ],
  providers: [ContentfulService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
