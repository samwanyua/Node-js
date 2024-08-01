import express from 'express';
import mongoose from 'mongoose';
import { PORT, MONGODB_URI } from './config.js';
import { Book } from './models/book.model.js';
import bookRoutes from './routes/books.routes.js'

const app = express();

// middleware
app.use(express.json());

app.get('/', (req, res) => {
  console.log(req);
  return res.status(200).json({ message: "Welcome to MERN stack!" });
});

app.use('/api/v1/books', bookRoutes);

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
