import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from "../services/products/product.service";
import { ActivatedRoute } from "@angular/router";
import { AppProduct } from "../models/app-product";
import "rxjs/add/operator/switchMap";
import { ShoppingCartService } from "../services/shopping-cart/shopping-cart.service";
import { Subscription } from "rxjs/Subscription";
import { Observable } from "rxjs/Observable";
import { AppShoppingCart } from "../models/app-shopping-cart";


@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: [ './products.component.css' ]
})
export class ProductsComponent implements OnInit {
    products: AppProduct[] = [];
    filtredProducts: AppProduct[] = [];
    category;
    cart$: Observable<AppShoppingCart>;

    constructor (private productService: ProductService,
                 private route: ActivatedRoute,
                 private cartService: ShoppingCartService) {
    }

    async ngOnInit () {
        this.cart$ = await this.cartService.getCart();
        this.papulateProducts();
    }

    private papulateProducts () {
        this.productService
            .getAll()
            .switchMap(products => {
                this.products = products;
                return this.route.queryParamMap;
            }).subscribe(params => {
            this.category = params.get('category');
            this.applyFillter();
        });
    }

    private applyFillter () {
        this.filtredProducts = (this.category) ?
            this.products.filter(p => p.category == this.category) :
            this.products;
    }
}
