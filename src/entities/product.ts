import { v4 as uuidv4 } from "uuid";
import { Cart } from "./cart";

export class Product {
  private _id: string = uuidv4();
  private _name: string;
  private _price: number;
  private _category: string;
  private _imageUrl: string;
  private _quantity: number = 0;
  private _total: number = 0;

  constructor(name: string, price: number, category: string, imageUrl: string) {
    this._name = name;
    this._price = price;
    this._category = category;
    this._imageUrl = imageUrl;
  }

  get id() {
    return this._id;
  }

  updateTotal() {
    this._total = this._price * this._quantity;
  }

  incrementQuantity() {
    this._quantity += 1;
    this.updateTotal();

    Cart.addToCart(this);
  }

  decrementQuantity() {
    this._quantity -= 1;
    this.updateTotal();
  }

  get total() {
    return this._total;
  }

  get quantity() {
    return this._quantity;
  }

  set quantity(quantity: number) {
    this._quantity = quantity;
  }

  get name() {
    return this._name;
  }

  get price() {
    return this._price;
  }
}