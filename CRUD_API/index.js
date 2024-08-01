const express = require('express');
const app = express();
const mongoose = require('mongoose')


const port = process.env.PORT || 5001

app.listen(port,() =>{
    console.log(`Server is running on ${port}`)
});

app.get('/', (req, res)=> {
    res.send("Hello, from Node API ..");
});

