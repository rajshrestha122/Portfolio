import express from "express";
import jwt from "jsonwebtoken";
import Admin from "../admin.model.js";

const loginRouter = express.Router();


loginRouter.post("/admin-signup", async (req, res )=> {
  const newAdmin = new Admin({
    email: "test@test.test", 
    password: "test", 
  });
  await newAdmin.save();

  return res.status(200).json({message: newAdmin, success: true});
})


loginRouter.post("/login", async (req, res)  => {
    const {email, password} = req.body;


    try{
        const existingAdmin = await Admin.findOne({email});
        if(!existingAdmin){
            return res.status(400).json({message: "Admin not found", success: false});
        }

        if(password !== existingAdmin.password){
            return res.json({message: "Password wrong", success: false});
        }
        const token = await jwt.sign({name: existingAdmin.name}, process.env.JWT_SECRET_KEY, {expiresIn: "1m"});

        return res.status(200).json({token: token});


    } catch(error){
        return res.status(500).json({message: "error in login route", success: false});
    } }

)
export default loginRouter;
