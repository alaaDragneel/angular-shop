import { AppShoppingCart } from "./app-shopping-cart";

export class AppOrder {
    created_at: number;
    items: any[];

    constructor (public userId: string, public shipping: any, shoppingCart: AppShoppingCart) {
        this.created_at = new Date().getTime();
        this.items = shoppingCart.items.map(item => {
            return {
                product: {
                    title: item.title,
                    imageUrl: item.imageUrl,
                    price: item.price,
                },
                quantity: item.quantity,
                totalPrice: item.totalPrice,
            };
        })
    }
}
