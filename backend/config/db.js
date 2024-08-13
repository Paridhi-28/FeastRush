import mongoose from "mongoose";

export const connectDB = async()=> {
    await mongoose.connect('mongodb+srv://agarwalparidhi07:7wMYaF0zaQx9L1bE@cluster0.vlyhtf8.mongodb.net/food-delivery').then(()=>console.log("DB Connected"));
}