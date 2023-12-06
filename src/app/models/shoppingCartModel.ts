import { ProductModel } from "./productModel";
import { UserModel } from "./userModel";

export interface ShoppingCartModel{
    id?:number;
    userId:number;
    user?:UserModel;
    amount:number;
    productId:number;
    product?:ProductModel;
    createdAt?:Date;
    updatedAt?:Date;
    deletedAt?:Date;
}