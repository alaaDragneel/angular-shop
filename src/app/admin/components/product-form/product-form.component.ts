import { Component, OnInit } from '@angular/core';
import { CategoryService } from "../../../shared/services/categories/category.service";
import { ProductService } from "../../../shared/services/products/product.service";
import { ActivatedRoute, Router } from "@angular/router";
import "rxjs/add/operator/take";

@Component({
    selector: 'app-product-form',
    templateUrl: './product-form.component.html',
    styleUrls: [ './product-form.component.css' ]
})
export class ProductFormComponent implements OnInit {
    categories$;
    id;
    product = {
        title: 'Product Title Here',
        category: 'vegetables',
        price: 0,
        imageUrl: 'https://images.pexels.com/photos/5938/food-salad-healthy-lunch.jpg?w=940&h=650&auto=compress&cs=tinysrgb',
    };

    constructor (private router: Router,
                 private route: ActivatedRoute,
                 private categoryService: CategoryService,
                 private productService: ProductService) {
        this.categories$ = categoryService.getAll();
        this.id = this.route.snapshot.paramMap.get('id');
        if ( this.id ) this.productService.get(this.id).take(1).subscribe(p => this.product = p);
    }

    save (product) {
        if ( this.id ) this.productService.update(this.id, product.value);
        else this.productService.create(product.value);
        this.router.navigate([ 'admin/products' ]);
    }

    delete () {
        if ( !confirm('Are You Sure You Want To Delete This Product?') ) return;
        this.productService.delete(this.id);
        this.router.navigate([ 'admin/products' ]);
    }

    ngOnInit () {
    }

}
