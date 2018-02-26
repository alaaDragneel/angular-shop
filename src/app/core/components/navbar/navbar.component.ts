import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../shared/services/auth/auth.service";
import { AppUser } from "../../../shared/models/app-user";
import { ShoppingCartService } from "../../../shared/services/shopping-cart/shopping-cart.service";
import { Observable } from "rxjs/Observable";
import { AppShoppingCart } from "../../../shared/models/app-shopping-cart";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: [ './navbar.component.css' ]
})
export class NavbarComponent implements OnInit {
    isNavbarCollapsed = true;
    appUser: AppUser;
    cart$: Observable<AppShoppingCart>;

    constructor (private auth: AuthService, private cartService: ShoppingCartService) {  }

    async ngOnInit () {
        this.auth.appUser$.subscribe(appUser => this.appUser = appUser);
        this.cart$ = await this.cartService.getCart();
    }

    logout () {
        this.auth.logout();
    }

}
