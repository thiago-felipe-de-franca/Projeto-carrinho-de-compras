import { v4 as randomUUID } from "uuid";

class Produto {
   private _id: string = randomUUID();
   private _valor: string; 
   public _nome: string;
   private _categoria: string; 
   private _imagemUrl: string;

   constructor(
    valor: string,
    nome: string,
    categoria: string,
    imagemUrl: string,
   ) {
    this._valor = valor;
    this._nome = nome;
    this._categoria = categoria;
    this._imagemUrl = imagemUrl;
   }
}

const waffleWithBerries = new Produto('$6.50','Waffle with Berries','Waffle','');
const vanillaBean = new Produto('$7.00','Vanilla Bean Crème Brûlée','Crème Brûlée','')
const macaronMixFive = new Produto('$8.00','Macaron Mix of Five','Macaron','')
const classicaTiramisu = new Produto('$5.50','Classic Tiramisu','Tiramisu','')
const pistachioBaklava = new Produto('4.00','Pistachio Baklava','Baklava','')
const lemonMeringuePie = new Produto('4.00','Lemon Meringue Pie','Pie','')
const redVelvetCake = new Produto('4.50','Red Velvet Cake','Cake','')
const saltedCaramelBrownie = new Produto('4.50','Salted Caramel Brownie','Brownie','')
const vanillaPannaCotta = new Produto('6.50','Vanilla Panna Cotta','Panna Cotta','')
