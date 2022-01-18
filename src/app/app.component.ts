import { Component, OnInit } from '@angular/core';
import { ContentfulService} from "./services/contentful.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title: string ='Product Catalog App';

  constructor() {}

  ngOnInit() {
  }
}
