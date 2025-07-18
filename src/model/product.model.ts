//
//  export interface Product {
//     id: number,
//     name: string,
//     price: number,
//     currency: string,
//     image: string,
// }

import mongoose, {Model} from "mongoose";

//Required =tru  === not null

// aniwa inna ona
//Unique= true === unique key constraints
//index = tru === create index  // data retrive custommers la list ekaka gadddi specific column ekakin data gaddi
const ProductModel = new mongoose.Schema(
    {
       "id": {
          required: true,
          type: Number,
          unique: true,
          index: true //fot better performance

       },
       "name":{
          required: true,
          type: String
       },
       "price": {
          required: true,
          type: Number
       },
       "currency": {
          required: true,
          type: String
       },
       "image": {
          required: true,
          type: String
       }
    }
);

const Product = mongoose.model('Product', ProductModel);
export default Product;