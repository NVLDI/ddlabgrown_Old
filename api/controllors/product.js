import { db } from "../connect.js";

export const addproduct = (req,res)=>{
    //TODO
    //insert data into product list
    const q = "INSERT INTO product (`date`,`product_code`,`product_name`,`diamond_shape`,`shape_cutting`,`diamond_color`,`diamond_carat`,`diamond_clarity`,`certificate_no`,`msrp`,`currency`) VALUES (?)";
    const values=[req.body.date,req.body.product_code,req.body.product_name,req.body.diamond_shape,req.body.shape_cutting,req.body.diamond_color,req.body.diamond_carat,req.body.diamond_clarity,req.body.certificate_no,req.body.msrp,req.body.currency]
    db.query(q,[values],(err,data)=>{
        if(err) return res.status(500).json(err);
        return res.status(200).json("Product has been created");
    });
};
export const listproduct = (req,res)=>{
    //TODO
    //insert data into product list
};