import  express from "express";
const app = express();
import productRoute from "./routes/product.js"
import authRoute from "./routes/auth.js"
import cors from "cors";
import cookieParser from "cookie-parser";
import distributorRoute from "./routes/distributor.js"
import distributorFullRoute from "./routes/distributorFull.js"

app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Credentials", true)
    next()
})
app.use(express.json())
app.use(cors({
    origin:"http://localhost:3000",
}))
app.use(cookieParser())

app.use("/api/product", productRoute)
app.use("/api/auth", authRoute)
app.use("/api/distributor",distributorRoute)
app.use("/api/distributorFull",distributorFullRoute)

app.listen(8800, ()=> {
    console.log("API Working!!!!")
})