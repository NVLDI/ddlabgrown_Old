import phpmyAdmin from "phpmyadmin"


export const db = phpmyAdmin.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"DDLabGrown"
})