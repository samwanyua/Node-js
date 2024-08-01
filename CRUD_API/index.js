const express = require('express');
const app = express();
app.use(express.json());
const mongoose = require('mongoose')
const Product = require('./models/product.model.js')

const port = process.env.PORT || 5001


app.get('/', (req, res)=> {
    res.send("Hello, from Node API ..");
});

app.post('/api/products', async (req, res) => {
    try{
        const product = await Product.create(req.body)
        res.status(201).json(product)

    } catch(error){
        res.status(500).json({message: error.message});
    }

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