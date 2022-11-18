import { db } from "../connect.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
export const register = (req,res)=>{
    //TODO
    //Checking for admin is avaliable or not
    const q = "SELECT * FROM admin WHERE adminname=?"
    db.query(q,[req.body.adminname],(err,data)=>{
        if(err) return res.status(500).json(err);
        if(data.length) return res.status(409).json("Admin Already Exist!");
    //Creating New Admin
    //hiding password
    const salt = bcrypt. genSaltSync(10) ;
    const hashedPassword = bcrypt. hashSync (req. body. password, salt);
    const q = "INSERT INTO admin (`adminname`,`password`) VALUES (?)";
    const values=[req.body.adminname,hashedPassword]
    db.query(q,[values],(err,data)=>{
        if(err) return res.status(500).json(err);
        return res.status(200).json("Admin has been created");
    });
});
};
export const login = (req,res)=>{
    //TODO
    const q = "SELECT * FROM admin WHERE adminname=?"
    db.query(q,[req.body.adminname],(err,data)=>{
        if(err) return res.status(500).json(err);
        if(data.length===0) return res.status(404).json("Admin Not found");

        const checkPassword =bcrypt.compareSync(req.body.password, data[0].password)
        if(!checkPassword)return res.status(400).json("Wrong password or Admin name")
        const token = jwt.sign({id: data[0].id}, "secretkey");
        res.cookie("accessToken",token,{
            httpOnly : true,
        }).status(200).json()
    });
};
export const logout = (req,res)=>{
    //TODO
}