
import { AppProduct } from "./app-product";

export class AppShoppingCartItem {
    $key: string;
    title: string;
    imageUrl: string;
    price: number;
    quantity: number;
    constructor(init?: Partial<AppShoppingCartItem>) {
        Object.assign(this, init);
    }

    get totalPrice() { return this.price * this.quantity }
}
