import { NgModule } from '@angular/core';
import { AdminProductsComponent } from "admin/components/admin-products/admin-products.component";
import { AdminOrdersComponent } from "admin/components/admin-orders/admin-orders.component";
import { ProductFormComponent } from "admin/components/product-form/product-form.component";
import { RouterModule } from '@angular/router';
import { SharedModule } from "shared/shared.module";
import { AuthGuard } from "shared/services/auth/auth-guard.service";
import { AdminAuthGuard } from 'admin/services/admin-auth-guard/admin-auth-guard.service';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild([
            { path: 'admin/products/new', component: ProductFormComponent, canActivate: [ AuthGuard, AdminAuthGuard ] },
            { path: 'admin/products/:id', component: ProductFormComponent, canActivate: [ AuthGuard, AdminAuthGuard ] },
            { path: 'admin/products', component: AdminProductsComponent, canActivate: [ AuthGuard, AdminAuthGuard ] },
            { path: 'admin/orders', component: AdminOrdersComponent, canActivate: [ AuthGuard, AdminAuthGuard ] },
        ])
    ],
    declarations: [
        AdminProductsComponent,
        AdminOrdersComponent,
        ProductFormComponent,
    ],
    providers: [
        AuthGuard,
        AdminAuthGuard
    ]
})
export class AdminModule {
}
