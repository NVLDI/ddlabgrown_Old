import Express  from "express";
import {addProduct,listProduct} from "../controllors/product.js"
const router = Express.Router()

router.get("/product",addProduct)
router.get("/listing",)

export default router