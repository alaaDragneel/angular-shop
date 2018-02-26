import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from "rxjs/Subscription";
import { OrderService } from "../services/order/order.service";
import { AuthService } from "../services/auth/auth.service";
import { AppOrder } from "../models/app-order";
import { Router } from "@angular/router";
import { AppShoppingCart } from "../models/app-shopping-cart";

@Component({
    selector: 'app-shipping-form',
    templateUrl: './shipping-form.component.html',
    styleUrls: [ './shipping-form.component.css' ]
})
export class ShippingFormComponent implements OnInit, OnDestroy {
    @Input('cart') cart: AppShoppingCart;
    shipping = {};
    subscription: Subscription;
    userId: string;

    constructor (private router: Router,
                 private authService: AuthService,
                 private orderService: OrderService) {
    }

    async ngOnInit () {
        this.subscription = this.authService.user$.subscribe(user => this.userId = user.uid);
    }

    async ngOnDestroy () {
        this.subscription.unsubscribe();
    }

    async placeOrder () {
        const order = new AppOrder(this.userId, this.shipping, this.cart);
        let result = await this.orderService.placeOrder(order);
        this.router.navigate([ '/order-success', result.key ]);
    }

}
