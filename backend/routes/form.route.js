import express from "express";
import  Form from "../form.model.js";
const router = express.Router();


router.get("/form", async(req, res)=> {
    const queries = await Form.find();
    return res.status(200).json({message:queries, success: true});
})

router.post("/form", async (req, res)=> {
    const {name, email, message} = req.body;

    if(!name || !email || !message){
        res.status(400).json({message: "All fields are required", success: false});
    }

    try{
        const newForm = new Form({
            name, email, message
        });

        await newForm.save();

        res.status(200).json({message: newForm, success: true});
        
    }catch(error){
        return res.status(500).json({message: error.message, success: false})
    }
})

export default router;