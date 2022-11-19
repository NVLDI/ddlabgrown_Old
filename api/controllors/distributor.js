import { db } from "../connect.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const disregister = (req,res)=>{
    //TODO
    //insert data into Distributor list
    const q = "SELECT * FROM distributorReg WHERE username=?"
    db.query(q,[req.body.username],(err,data)=>{
        if(err) return res.status(500).json(err);
        if(data.length) return res.status(409).json("User Already Exist!");
//hiding password
const salt = bcrypt.genSaltSync(10) ;
const hashedPassword = bcrypt.hashSync (req. body. password, salt);
    const q = "INSERT INTO distributorReg (`username`,`password`,`email`,`sponsor_id`) VALUES (?)";
    const values=[req.body.username,hashedPassword,req.body.email,req.body.sponsor_id]
    db.query(q,[values],(err,data)=>{
        if(err) return res.status(500).json(err);
        return res.status(200).json("Distributor has been created");
    });
    });
};
export const dislogin = (req,res)=>{
    //TODO
    //insert data into Distributor list
};
export const dislogout = (req,res)=>{
    //TODO
    //insert data into Distributor list
};
