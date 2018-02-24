import { Component, OnInit } from '@angular/core';
import { ProductService } from "../services/products/product.service";
import { ActivatedRoute } from "@angular/router";
import { AppProduct } from "../models/app-product";
import "rxjs/add/operator/switchMap";


@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: [ './products.component.css' ]
})
export class ProductsComponent {
    products: AppProduct[] = [];
    filtredProducts: AppProduct[] = [];
    category;

    constructor (private productService: ProductService, private route: ActivatedRoute) {
        this.productService
            .getAll()
            .switchMap(products => {
                this.products = products;
                return route.queryParamMap;
            }).subscribe(params => {
            this.category = params.get('category');
            this.filtredProducts = (this.category) ?
                this.products.filter(p => p.category == this.category) :
                this.products;
        });
    }

}
