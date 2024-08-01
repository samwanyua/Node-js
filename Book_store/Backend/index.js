import express from 'express';
import mongoose from 'mongoose';
import { PORT, MONGODB_URI } from './config.js';
import { Book } from './models/book.model.js';

const app = express();

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
