import { AppShoppingCartItem } from "./app-shopping-cart-item";
import { AppProduct } from "./app-product";

export class AppShoppingCart {
    items: AppShoppingCartItem[] = [];

    constructor (private itemsMap: { [productId: string]: AppShoppingCartItem }) {
        this.itemsMap = itemsMap || {};
        for (let productId in itemsMap) {
            let item = itemsMap[ productId ];
            this.items.push(new AppShoppingCartItem({ ...item, $key: productId }));
        }
    }


    get totalPrice () {
        let sum = 0;
        for (const productId in this.items) {
            sum += this.items[ productId ].totalPrice;
        }
        return sum;
    }

    getQuantity (product: AppProduct) {
        let item = this.itemsMap[ product.$key ];
        return item ? item.quantity : 0;
    }

    get totalItemsCount () {
        let count = 0;
        for (const productId in this.itemsMap) {
            count += this.itemsMap[ productId ].quantity;
        }
        return count;
    }
}
