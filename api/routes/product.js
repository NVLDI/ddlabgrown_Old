import express  from "express";
import {addproduct,listproduct} from "../controllors/product.js"
const router = express.Router()

router.post("/addproduct",addproduct)
router.post("/listproduct",listproduct)

export default router