import Express  from "express";
import {Fullregister,listdistributor} from "../controllors/distributorFull.js";
const router = Express.Router()

router.post("/Fullregister",Fullregister)
router.post("/listdistributor",listdistributor)
export default router