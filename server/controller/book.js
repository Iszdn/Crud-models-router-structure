import Books from '../model/book.js'

export const getData=async (req,res)=>{
    try {
    const getDatas=await Books.find({})
        res.send(getDatas)
    } catch (error) {
        res.status(500)
    }
    }
    
    export const getDataById=async (req,res)=>{
        const {id}=req.params
        try {
        const getData=await Books.findById(id)
            res.send(getData)
        } catch (error) {
            res.status(500)
        }
        }
    
    export const createData=async (req,res)=>{
            try {
            const postData=new Books(req.body)
            await data.save()
                res.send(postData)
            } catch (error) {
                res.status(500)
            }
            }
    
   export const deleteData=async (req,res)=>{
        const {id}=req.params
        try {
            const deleteData=await Books.findByIdAndDelete(id)
            res.send(deleteData)
        } catch (error) {
            res.status(500)
        }
    }
    
    export const updateData=async (req,res)=>{
        const {id}=req.params
    try {
        const updateData= await Books.findByIdAndUpdate(id,req.body)
        res.send(updateData)
    } catch (error) {
        res.status(500)  
    }
    }