import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';

import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { SharedModule } from "shared/shared.module";
import { AdminModule } from "admin/admin.module";
import { ShoppingModule } from "shopping/shopping.module";
import { CoreModule } from "core/core.module";
import { ProductsComponent } from "shopping/components/products/products.component";
import { LoginComponent } from "core/components/login/login.component";
import { GuestGuard } from "shared/services/auth/guest-guard.service";

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AdminModule,
        CoreModule,
        SharedModule,
        ShoppingModule,
        RouterModule.forRoot([
            { path: '', component: ProductsComponent },
            { path: 'login', component: LoginComponent, canActivate: [ GuestGuard ] },
        ]),

        // firebase init should call once
        AngularFireModule.initializeApp(environment.firebase),

    ],
    providers: [
        GuestGuard
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
