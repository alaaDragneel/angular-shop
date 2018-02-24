import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-card',
  templateUrl: './products-card.component.html',
  styleUrls: ['./products-card.component.css']
})
export class ProductsCardComponent implements OnInit {
  @Input('product') product;
  @Input('show-actions') showActions = true;
  constructor() { }

  ngOnInit() {
  }

}
