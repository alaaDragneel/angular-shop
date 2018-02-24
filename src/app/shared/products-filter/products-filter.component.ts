import { Component, Input, OnInit } from '@angular/core';
import { CategoryService } from "../../services/categories/category.service";

@Component({
    selector: 'app-products-filter',
    templateUrl: './products-filter.component.html',
    styleUrls: [ './products-filter.component.css' ]
})
export class ProductsFilterComponent implements OnInit {
    categories$;
    @Input('category') category;
    constructor (private categoryService: CategoryService) {
        this.categories$ = this.categoryService.getAll();
    }

    ngOnInit () {
    }

}
