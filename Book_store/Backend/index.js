import express from 'express';
import mongoose from 'mongoose';
import { PORT, MONGODB_URI } from './config.js';

const app = express();

app.get('/', (req, res) => {
  console.log(req);
  return res.status(200).json({ message: "Welcome to MERN stack!" });
});

// Connect to MongoDB
mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("App is connected to the database");
    app.listen(PORT, () => {
      console.log(`App is listening on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
