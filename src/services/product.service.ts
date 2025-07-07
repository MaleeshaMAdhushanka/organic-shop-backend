//Business logic-
// backend logic
import {productList} from "../db/db";
import {Product} from "../model/product.model";

 // Get all products service logic
 export const  getAllProducts = ():Product[] => {
    return productList;
}

//return kara save karapu product eka
export const saveProduct = (product: Product):Product => {
     productList.push((product));
     return product;
}

export const getProductById = (id: number):Product | undefined => {
    return productList.find(product => product.id === id);

}

export const  updateProduct = (id: number, data:Product)=> {
    const  product = productList.find(product => product.id === id);
    console.log(product);
    if (!product){
         return null;
     }
     //replace kara
     Object.assign(product, data)
    return product;
}

export const deleteProduct = (id: number) => {
     const index = productList.findIndex(product => product.id === id);
        if(index === -1){
            return false;
        }
        productList.splice(index, 1);
        return true;


}

export const validatedProduct = (product: Product) => {
     if (!product.id || !product.name || !product.price || !product.currency || !product.image){
         return "All filed are required";
     }
     return null;
}