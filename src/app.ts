import data from "../data.json";
import { Cart } from "./entities/cart";
import { Product } from "./entities/product";

const products: Product[] = []

for (const product of data) {
  const newProduct = new Product(
    product.name,
    product.price,
    product.category,
    product.image.desktop
  );
  products.push(newProduct)
}

console.log(products)
