import { Component, Input, OnInit } from '@angular/core';
import { AppProduct } from "../../models/app-product";
import { ShoppingCartService } from "../../services/shopping-cart/shopping-cart.service";
import { AppShoppingCart } from "../../models/app-shopping-cart";

@Component({
    selector: 'app-products-card',
    templateUrl: './products-card.component.html',
    styleUrls: [ './products-card.component.css' ]
})
export class ProductsCardComponent implements OnInit {
    @Input('product') product;
    @Input('show-actions') showActions = true;
    @Input('shopping-cart') shoppingCart: AppShoppingCart;


    constructor (private cartService: ShoppingCartService) {
    }

    addToCard () {
        this.cartService.addToCart(this.product);
    }

    // getQuantity () {
    //     if ( !this.shoppingCart ) return 0;
    //     let item = this.shoppingCart.itemsMap[ this.product.$key ];
    //     return item ? item.quantity : 0;
    // }

    ngOnInit () {
    }

}
