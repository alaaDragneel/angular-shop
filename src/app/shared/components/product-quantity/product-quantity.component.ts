import { Component, Input } from '@angular/core';
import { ShoppingCartService } from "../../services/shopping-cart/shopping-cart.service";
import { AppShoppingCart } from "../../models/app-shopping-cart";

@Component({
    selector: 'app-product-quantity',
    templateUrl: './product-quantity.component.html',
    styleUrls: [ './product-quantity.component.css' ]
})
export class ProductQuantityComponent {

    @Input('product') product;
    @Input('shopping-cart') shoppingCart: AppShoppingCart;

    constructor (private cartService: ShoppingCartService) {
    }

    addToCard () {
        this.cartService.addToCart(this.product);
    }

    removeFromCard () {
        this.cartService.removeFromCard(this.product);
    }
}
