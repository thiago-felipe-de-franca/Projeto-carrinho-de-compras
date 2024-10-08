import { Product } from "./product";

export class Cart {
  private static _products: Product[] = [];
  private static _orderTotal: number = 0;
  private static _quantityTotal: number = 0;

  static calculateTotal() {
    this._orderTotal = 0;
    this._quantityTotal = 0;

    this._products.forEach((product) => {
      this._orderTotal += product.total;
      this._quantityTotal += product.quantity;
    });
  }

  static removeProduct(product: Product) {
    // Remove um produto do carrinho
    this._products = this._products.filter((item) => item.id !== product.id);
    this.calculateTotal();
  }

  static addToCart(product: Product) {
    // Verificar se o produto existe no carrinho
    const productExists = this._products.includes(product);

    // Se o produto não estiver no carrinho, execute
    if (!productExists) {
      this._products.push(product);
    }

    // Atualiza o valor total da compra
    this.calculateTotal();
  }

  static get products() {
    return this._products;
  }

  static get total() {
    return this._orderTotal;
  }
}