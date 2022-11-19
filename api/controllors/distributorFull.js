import { db } from "../connect.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const Fullregister = (req,res)=>{
    //TODO
    //insert data into Distributor list
    const q = "SELECT * FROM distributorReg WHERE username=?"
    db.query(q,[req.body.username],(err,data)=>{
        if(err) return res.status(500).json(err);
        if(data.length) return res.status(409).json("User Already Exist!");
//hiding password
const salt = bcrypt.genSaltSync(10) ;
const hashedPassword = bcrypt.hashSync (req.body.password, salt);
    const q = "INSERT INTO distributorReg (`first_name`,`last_name`,`nic_no`,`address_1`,`address_2`,`state`,`country`,`zip_code`,`username`,`password`,`phone_no`,`email`,`occupation`,`bank_name`,`account_no`,`shift_code`,`bank_address1`,`bank_address2`,`bank_country`,`sponsor_id`,`sponsor_name`,`contact_no`) VALUES (?)";
    const values=[req.body.first_name,req.body.last_name,req.body.nic_no,req.body.address_1,req.body.address_2,req.body.state,req.body.country,req.body.zip_code,req.body.username,hashedPassword,req.body.phone_no,req.body.email,req.body.occupation,req.body.bank_name,req.body.account_no,req.body.shift_code,req.body.bank_address1,req.body.bank_address2,req.body.bank_country,req.body.sponsor_id,req.body.sponsor_name,req.body.contact_no]
    db.query(q,[values],(err,data)=>{
        if(err) return res.status(500).json(err);
        return res.status(200).json("Distributor has been created");
    });
    });
};
export const listdistributor = (req,res)=>{
    //TODO
    //insert data into Distributor list
};