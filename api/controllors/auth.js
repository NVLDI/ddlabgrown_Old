import { db } from "../connect.js"

export const register = (req,res)=>{
    //TODO
    const q = "SELECT FROM admin WHERE adminname=?"
    db.qurey(q,[])
}
export const login = (req,res)=>{
    //TODO
}
export const logout = (req,res)=>{
    //TODO
}