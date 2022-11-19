import Express  from "express";
import {dislogin,disregister,dislogout} from "../controllors/distributor.js";
const router = Express.Router()

router.post("/dislogin",dislogin)
router.post("/disregister",disregister)
router.post("/dislogout",dislogout)
export default router