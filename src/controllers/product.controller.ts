import {Request, Response} from 'express';
import * as productService from "../services/product.service";
//controller function to handle get all products

export const getAllProducts = async  (req: Request, res: Response) => {
    try {
        const products = await productService.getAllProducts();
        res.status(200).json(products);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: 'Something want wrong'!
        });
    }

}

export const saveProduct = async (req: Request, res: Response) => {

    try {
        const product = req.body;
        const validationError = productService.validatedProduct(product);

        if (validationError) {
            res.status(400).json({
                error: validationError
            });
            return;
        }

        const savedProduct = await productService.saveProduct(product);
        console.log(savedProduct);
        res.status(201).json(savedProduct);
        return;

    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: 'Something want wrong'!
        });
    }

}

export const getProduct = (req: Request, res: Response) => {

 const productId = parseInt(req.params.id);

   if (isNaN(productId)){
     res.status(400).json({
         error: 'Invalid product ID'
     });
     return
  }
  const  product = productService.getProductById(productId);
   if (!product){
       res.status(404).json({
           error: 'Product not found'
       });
       return;
   }
   res.status(200).json(product);

}

export const updateProduct = (req: Request, res: Response) => {
   const productId = parseInt(req.params.id);

    if (isNaN(productId)){
        res.status(400).json({
            error: 'Invalid product ID'
        });
        return
    }
     const  updatedData = req.body;
     const updatedProduct = productService.updateProduct(productId, updatedData);
     if (!updatedProduct){
         res.status(404).json( {
             error: 'Product not found'
         });
         return;
     }
     res.status(200).json(updatedProduct);


}

export const deleteProduct = (req: Request, res: Response) => {
    const productId = parseInt(req.params.id);

    if (isNaN(productId)){
        res.status(400).json({
            error: 'Invalid product ID'
        });
        return
    }
   const  deleteProduct = productService.deleteProduct(productId);
    if (!deleteProduct){
        res.status(404).json({
            error: 'Product not found'
        });
        return;
    }
    res.status(200).json({
      message: 'Product deleted successfully'
    });

}

