import { v4 as randomUUID } from "uuid";

export class Produto {
   private _id: string = randomUUID();
   private _price: string; 
   public _name: string;
   private _category: string; 
   private _imageUrl: string;

   constructor(
    price: string,
    name: string,
    category: string,
    imageUrl: string,
   ) {
    this._price = price;
    this._name = name;
    this._category = category;
    this._imageUrl = imageUrl;
   }
}
