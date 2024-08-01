import express from 'express';
import mongoose from 'mongoose';
import { PORT, MONGODB_URI } from './config.js';
import { Book } from './models/book.model.js';

const app = express();

// middleware
app.use(express.json());

app.get('/', (req, res) => {
  console.log(req);
  return res.status(200).json({ message: "Welcome to MERN stack!" });
});

// Route to save a new book
app.post('/api/v1/books', async(req,res)=>{
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
app.get('/api/v1/books', async(req,res)=>{
    try {
        const books = await Book.find({});
        res.status(200).json(books);

        
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

// Get an individual book
app.get('/api/v1/books/:id', async(req,res)=>{
    try {
        const {id} = req.params;
        const book = await Book.findById(id);
        res.status(200).json(book);
        
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

// update a book
app.put('/api/v1/books/:id', async(req, res)=>{
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
app.delete('/api/v1/books/:id', async(req,res)=>{
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
})

// Connect to MongoDB
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("App is connected to the database");
    app.listen(PORT, () => {
      console.log(`App is listening on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
