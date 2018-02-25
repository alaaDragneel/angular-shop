import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from "angularfire2/database";
import { AppProduct } from "../../models/app-product";
import "rxjs/add/operator/take";
import { AppShoppingCart } from "../../models/app-shopping-cart";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";

@Injectable()
export class ShoppingCartService {

    constructor (private db: AngularFireDatabase) {
    }

    async getCart (): Promise<Observable<AppShoppingCart>> {
        const cartId = await this.getOrCreateCartId();
        return this.db.object('/shopping-carts/' + cartId).map(p => new AppShoppingCart(p.items));
    }

    async addToCart (product: AppProduct) {
        this.updateItem(product, +1);
    }

    async removeFromCard (product: AppProduct) {
        this.updateItem(product, -1);
    }

    async clearCart () {
        let cartId = await this.getOrCreateCartId();
        this.db.object('/shopping-carts/' + cartId + '/items').remove();
    }

    private create () {
        return this.db.list('/shopping-carts').push({
            created_at: new Date().getTime()
        });
    }

    private getItem (cartId, productId) {
        return this.db.object('/shopping-carts/' + cartId + '/items/' + productId);
    }

    private async getOrCreateCartId (): Promise<string> {
        const cartId = localStorage.getItem('cartId');

        if ( cartId ) return cartId;
        const result = await this.create();
        localStorage.setItem('cartId', result.key);
        return result.key;
    }


    private async updateItem (product: AppProduct, change: number) {
        const cartId = await this.getOrCreateCartId();
        const item$ = this.getItem(cartId, product.$key);

        item$.take(1).subscribe(item => {
            let quantity = (item.quantity || 0) + change;

            if ( quantity === 0 ) item$.remove();
            else item$.update({ title: product.title, imageUrl: product.imageUrl, price: product.price, quantity: quantity });
        });

    }

}
