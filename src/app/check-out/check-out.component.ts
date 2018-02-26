import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from "../services/shopping-cart/shopping-cart.service";
import { AppShoppingCart } from "../models/app-shopping-cart";
import { Observable } from "rxjs/Observable";

@Component({
    selector: 'app-check-out',
    templateUrl: './check-out.component.html',
    styleUrls: [ './check-out.component.css' ]
})
export class CheckOutComponent implements OnInit {
    cart$: Observable<AppShoppingCart>;

    constructor (private cartService: ShoppingCartService) {
    }

    async ngOnInit () {
        // get the cart not an observable with all the cards
        this.cart$ = await this.cartService.getCart();
    }


}
