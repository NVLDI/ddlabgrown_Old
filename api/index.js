import  express from "express";
const app = express();
import productRoute from "./routes/product.js"
import authRoute from "./routes/auth.js"
import cors from "cors";
import cookieParser from "cookie-parser";
import distributorRoute from "./routes/distributor.js"


app.use(express.json())
app.use(cors())
app.use(cookieParser())

app.use("/api/product", productRoute)
app.use("/api/auth", authRoute)
app.use("/api/distributor",distributorRoute)


app.listen(8800, ()=> {
    console.log("API Working!!!!")
})