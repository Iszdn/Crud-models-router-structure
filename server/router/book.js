import express from "express";
import {
    getDataById,
    getData,
    createData,
    deleteData,
    updateData
} from "../controller/book.js";


const router = express.Router();

//CREATE
router.post("/books/:id",  createData);
//UPDATE
router.put("/:id",updateData );


//DELETE
router.delete("/:id", deleteData);
//GET
router.get("/:id", getDataById);
//GET ALL
router.get("/", getData);

export default router;