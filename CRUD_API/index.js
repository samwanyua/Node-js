const express = require('express');
const app = express();
const mongoose = require('mongoose')


const port = process.env.PORT || 5001


app.get('/', (req, res)=> {
    res.send("Hello, from Node API ..");
});

// connecting to the database
mongoose.connect("mongodb+srv://samexample8:S6w66d4vVyz0xStd@backend.nwoboto.mongodb.net/?retryWrites=true&w=majority&appName=Backend")
.then(()=> {
    console.log("Connected to the database");
    app.listen(port,() =>{
        console.log(`Server is running on ${port}`)
    });
    
})
.catch(() => {
    console.log("Connection failed")
})