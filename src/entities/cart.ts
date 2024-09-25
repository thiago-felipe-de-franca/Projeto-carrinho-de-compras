import { Product } from "./product";

export class Cart {
  private static _products: Product[] = [];
  private static _total: number = 0;

  static addToCart(product: Product) {
    // Atualiza o valor total da compra
    this._total += product.total;

    // Verificar se o produto existe no carrinho;
    // Se caso existir, sobrescrever o valor
  }

  static get products() {
    return this._products;
  }

  static get total() {
    return this._total;
  }
}