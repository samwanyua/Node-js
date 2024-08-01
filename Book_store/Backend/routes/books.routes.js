import express from "express"
import { Book } from "../models/book.model.js";

const router = express.Router();

// Route to save a new book
router.post('/', async(req,res)=>{
    try {
        if(!req.body.title || !req.body.author || !req.body.publishYear){
            res.status(400).json({message: "Send all required fields ie. title, author and publishYear"})
        }
        
        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear,
        }

        const book = await Book.create(newBook);
        res.status(201).json(book);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

// Get all books
router.get('/', async(req,res)=>{
    try {
        const books = await Book.find({});
        res.status(200).json(books);

        
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

// Get an individual book
router.get('/:id', async(req,res)=>{
    try {
        const {id} = req.params;
        const book = await Book.findById(id);
        res.status(200).json(book);
        
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

// update a book
router.put('/:id', async(req, res)=>{
    try {
        if(!req.body.title || !req.body.author || !req.body.publishYear){
            res.status(400).json({message: "Send all required fields ie. title, author and publishYear"})
        }
        
        const {id} = req.params;
        const result = await Book.findByIdAndUpdate(id, req.body);
        if(!result){
            return res.status(404).json({message: "Book not found"})
        }

        const updatedBook = await Book.findById(id);
        return res.status(200).json(updatedBook);

    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

// delete a book
router.delete('/:id', async(req,res)=>{
    try {
        const {id} = req.params;
        const book = await Book.findByIdAndDelete(id);
        if(!book){
            return res.status(404).json({message: "Book not found."})
        }
        return res.status(200).json({message: "Book deleted successfully."})

    } catch (error) {
        res.status(500).json({message: error.message})
    }
});

export default router;
