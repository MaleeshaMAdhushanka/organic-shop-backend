import {Router} from "express";
import {deleteProduct, getAllProducts, getProduct, saveProduct, updateProduct} from "../controllers/product.controller";


const  productRouter = Router();

//Handle Requests
productRouter.get("/all", getAllProducts)//Get All
productRouter.post("/save", saveProduct)//Save
productRouter.get("/:id", getProduct) //get by id
productRouter.put("/update/:id", updateProduct) //Update by id
productRouter.delete("/delete/:id", deleteProduct) //Delete by id



export  default productRouter;