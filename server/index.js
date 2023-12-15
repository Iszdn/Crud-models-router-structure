import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors"
import BookRouter from "./router/book.js";
dotenv.config()
const app=express()


// Midleware 
app.use(cors())
app.use(express.json())

app.use("/api/books", BookRouter);
// app.use("/api/products", BookRouter);
// const {Schema}=mongoose



// const BooksSchema=new Schema({
//     title:{type:String},
//     description:{type:String},
//     image:{type:String},
//     category:[{type:String}]
// },{timestamps:true})

// const Books=mongoose.model("books",BooksSchema)


// app.get("/",async (req,res)=>{
// try {
// const data=await Books.find({})
//     res.send(data)
// } catch (error) {
//     res.status(500)
// }
// })

// app.get("/:id",async (req,res)=>{
//     const {id}=req.params
//     try {
//     const data=await Books.findById(id)
//         res.send(data)
//     } catch (error) {
//         res.status(500)
//     }
//     })

// app.post("/",async (req,res)=>{
//         try {
//         const data=new Books(req.body)
//         await data.save()
//             res.send(data)
//         } catch (error) {
//             res.status(500)
//         }
//         })

// app.delete("/:id",async (req,res)=>{
//     const {id}=req.params
//     try {
//         const data=await Books.findByIdAndDelete(id)
//         res.send(data)
//     } catch (error) {
//         res.status(500)
//     }
// })

// app.put("/:id",async (req,res)=>{
//     const {id}=req.params
// try {
//     const data= await Books.findByIdAndUpdate(id,req.body)
//     res.send(data)
// } catch (error) {
//     res.status(500)  
// }
// })

const PORT=process.env.PORT
const url=process.env.CONNECTION_URL.replace("<password>",process.env.PASSWORD)

mongoose.connect(url).then(()=>console.log("connected")).catch(err=>console.log("not connected" + err))

app.listen(PORT,()=>{
    console.log("server connected");
})