import mongoose from "mongoose";

const {Schema}=mongoose

const BooksSchema=new Schema({
    title:{type:String},
    description:{type:String},
    image:{type:String},
    category:[{type:String}]
},{timestamps:true})


export default mongoose.model("Room", BooksSchema);