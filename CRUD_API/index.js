const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
const mongoose = require('mongoose')
const Product = require('./models/product.model.js')
const productRoute = require('./routes/products.routes.js')

const port = process.env.PORT || 5001

// routes
app.use('/api/products', productRoute)

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