import { NgModule } from '@angular/core';
import { ProductsComponent } from "shopping/components/products/products.component";
import { ShoppingCartComponent } from "shopping/components/shopping-cart/shopping-cart.component";
import { ShoppingCartSummeryComponent } from "shopping/components/shopping-cart-summery/shopping-cart-summery.component";
import { OrderSuccessComponent } from "shopping/components/order-success/order-success.component";
import { MyOrdersComponent } from "shopping/components/my-orders/my-orders.component";
import { ShippingFormComponent } from "shopping/components/shipping-form/shipping-form.component";
import { CheckOutComponent } from "shopping/components/check-out/check-out.component";
import { SharedModule } from "shared/shared.module";
import { RouterModule } from '@angular/router';
import { AuthGuard } from "shared/services/auth/auth-guard.service";

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild([
            { path: 'products', component: ProductsComponent },
            { path: 'check-out', component: CheckOutComponent, canActivate: [ AuthGuard ] },
            { path: 'order-success/:id', component: OrderSuccessComponent, canActivate: [ AuthGuard ] },
            { path: 'my-orders', component: MyOrdersComponent, canActivate: [ AuthGuard ] },
            { path: 'shopping-cart', component: ShoppingCartComponent },
        ])
    ],
    declarations: [
        ProductsComponent,
        ShoppingCartComponent,
        CheckOutComponent,
        OrderSuccessComponent,
        MyOrdersComponent,
        ShoppingCartSummeryComponent,
        ShippingFormComponent
    ],
    providers: [
        AuthGuard
    ]
})
export class ShoppingModule {
}
