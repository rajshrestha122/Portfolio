import mongoose from "mongoose";

const formSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true, 
        trim: true
    }, 
    email: {
        type: String, 
        required: true, 
        tirm: true
    }, 
    message: {
        type: String, 
        required: true, 
        trim: true
    }
});

const Form = mongoose.model("form", formSchema);

export default Form;