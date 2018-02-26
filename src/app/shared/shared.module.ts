import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsFilterComponent } from "shared/components/products-filter/products-filter.component";
import { ProductsCardComponent } from "shared/components/products-card/products-card.component";
import { ProductQuantityComponent } from "shared/components/product-quantity/product-quantity.component";
import { AuthService } from "shared/services/auth/auth.service";
import { UserService } from "shared/services/auth/user.service";
import { AuthGuard } from "shared/services/auth/auth-guard.service";
import { ShoppingCartService } from "shared/services/shopping-cart/shopping-cart.service";
import { GuestGuard } from "shared/services/auth/guest-guard.service";
import { CategoryService } from "shared/services/categories/category.service";
import { OrderService } from "shared/services/order/order.service";
import { ProductService } from "shared/services/products/product.service";
import { FormsModule } from "@angular/forms";
import { CustomFormsModule } from "ng2-validation";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireAuthModule } from "angularfire2/auth";
import { RouterModule } from "@angular/router";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        CustomFormsModule,
        RouterModule.forChild([]),
        NgbModule.forRoot(),
        AngularFireDatabaseModule,
        AngularFireAuthModule
    ],
    declarations: [
        ProductsFilterComponent,
        ProductsCardComponent,
        ProductQuantityComponent,
    ],
    exports: [
        ProductsFilterComponent,
        ProductsCardComponent,
        ProductQuantityComponent,
        CommonModule,
        FormsModule,
        CustomFormsModule,
        NgbModule.forRoot().ngModule,
        AngularFireDatabaseModule,
        AngularFireAuthModule
    ],
    providers: [
        AuthService,
        UserService,
        AuthGuard,
        GuestGuard,
        CategoryService,
        ProductService,
        ShoppingCartService,
        OrderService
    ]
})
export class SharedModule {
}
