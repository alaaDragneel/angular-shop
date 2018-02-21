import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from "../../services/products/product.service";
import { Subscription } from "rxjs/Subscription";
import { AppProduct } from "../../models/app-product";

@Component({
    selector: 'app-admin-products',
    templateUrl: './admin-products.component.html',
    styleUrls: [ './admin-products.component.css' ]
})
export class AdminProductsComponent implements OnInit, OnDestroy {
    products: AppProduct[];
    filterdProducts: any[];
    private subscription: Subscription;
    constructor (private productService: ProductService) {
        this.subscription = productService.getAll().subscribe(products => {
            return this.filterdProducts = this.products = products;
        });
    }

    ngOnInit () {
    }

    filter (query: string) {
        this.filterdProducts = (query) ?
            this.products.filter(product =>  product.title.toLowerCase().includes(query.toLowerCase())) :
            this.products;
    }

    ngOnDestroy () {
        this.subscription.unsubscribe();
    }

}
