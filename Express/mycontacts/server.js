const express = require('express')
const dotenv = require('dotenv').config();

const app = express(); // create an instance of Express application

const port = process.env.PORT || 5000;

app.get("/api/v1/contacts", (req, res) =>{
    res.json({message: "Get all contacts"})
})

app.listen(port, ()=> {
    console.log(`Server running on port ${port}`);
})
