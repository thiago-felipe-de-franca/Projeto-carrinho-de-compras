import {Product} from './product'

export class Cart {
    private _products: Product[] = []
    private _total: number = 0

    addToCart(product: Product) {
        this._products.push(product)
    }

    get products() {
        return this._products
    }
}