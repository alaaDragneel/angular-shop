import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth/auth.service';
import { AuthGuard } from "./services/auth/auth-guard.service";
import { GuestGuard } from "./services/auth/guest-guard.service";
import { UserService } from './services/auth/user.service';
import { AdminAuthGuard } from "./services/auth/admin-auth-guard.service";
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { CategoryService } from './services/categories/category.service';
import { FormsModule } from "@angular/forms";
import { ProductService } from "./services/products/product.service";
import { CustomFormsModule } from 'ng2-validation';
import { ProductsFilterComponent } from './shared/products-filter/products-filter.component';
import { ProductsCardComponent } from './shared/products-card/products-card.component';
import { ShoppingCartService } from "./services/shopping-cart/shopping-cart.service";
import { ProductQuantityComponent } from './shared/product-quantity/product-quantity.component';


@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        HomeComponent,
        ProductsComponent,
        ShoppingCartComponent,
        CheckOutComponent,
        OrderSuccessComponent,
        MyOrdersComponent,
        AdminProductsComponent,
        AdminOrdersComponent,
        LoginComponent,
        ProductFormComponent,
        ProductsFilterComponent,
        ProductsCardComponent,
        ProductQuantityComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        CustomFormsModule,
        RouterModule.forRoot([
            { path: '', component: ProductsComponent },
            { path: 'products', component: ProductsComponent },
            { path: 'shopping-cart', component: ShoppingCartComponent },

            { path: 'login', component: LoginComponent, canActivate: [ GuestGuard ] },

            { path: 'check-out', component: CheckOutComponent, canActivate: [ AuthGuard ] },
            { path: 'order-success', component: OrderSuccessComponent, canActivate: [ AuthGuard ] },
            { path: 'my-orders', component: MyOrdersComponent, canActivate: [ AuthGuard ] },
            { path: 'admin/products/new', component: ProductFormComponent, canActivate: [ AuthGuard, AdminAuthGuard ] },
            { path: 'admin/products/:id', component: ProductFormComponent, canActivate: [ AuthGuard, AdminAuthGuard ] },
            { path: 'admin/products', component: AdminProductsComponent, canActivate: [ AuthGuard, AdminAuthGuard ] },
            { path: 'admin/orders', component: AdminOrdersComponent, canActivate: [ AuthGuard, AdminAuthGuard ] },
        ]),
        NgbModule.forRoot(),
        // firebase init
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule,
        AngularFireAuthModule
    ],
    providers: [
        AuthService,
        UserService,
        AuthGuard,
        AdminAuthGuard,
        GuestGuard,
        CategoryService,
        ProductService,
        ShoppingCartService
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
