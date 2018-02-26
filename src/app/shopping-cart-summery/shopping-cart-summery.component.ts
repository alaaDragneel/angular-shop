import { Component, Input, OnInit } from '@angular/core';
import { AppShoppingCart } from "../models/app-shopping-cart";

@Component({
    selector: 'app-shopping-cart-summery',
    templateUrl: './shopping-cart-summery.component.html',
    styleUrls: [ './shopping-cart-summery.component.css' ]
})
export class ShoppingCartSummeryComponent implements OnInit {
    @Input('cart') cart: AppShoppingCart;

    constructor () {
    }

    ngOnInit () {
    }

}
