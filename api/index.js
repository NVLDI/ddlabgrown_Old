import  express from "express";
const app = express();
import productRoute from "./routes/product.js"
import authRoute from "./routes/auth.js"
import cors from "cors";
import cookieParser from "cookie-parser";


app.use(express.json())
app.use("/api/product", productRoute)
app.use("/api/auth", authRoute)
app.use(cors())
app.use(cookieParser())

app.listen(8800, ()=> {
    console.log("API Working!!!!")
})