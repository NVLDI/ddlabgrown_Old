import  Express from "express";
const app = Express();
import productRoute from "./routes/product.js"
import authRoute from "./routes/auth.js"


app.use("/api/product", productRoute)
app.use("/api/auth", authRoute)


app.listen(8800, ()=> {
    console.log("API Working!!!!")
})