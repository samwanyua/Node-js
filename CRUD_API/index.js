const express = require('express');
const app = express();
app.use(express.json());
const mongoose = require('mongoose')
const Product = require('./models/product.model.js')

const port = process.env.PORT || 5001


app.get('/', (req, res)=> {
    res.send("Hello, from Node API ..");
});

// get all products
app.get('/api/products', async (req, res) =>{
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({message:error.message })
    }
});

// get one product
app.get('/api/products/:id', async (req, res) =>{
    try {
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// Create a product
app.post('/api/products', async (req, res) => {
    try{
        const product = await Product.create(req.body)
        res.status(201).json(product)

    } catch(error){
        res.status(500).json({message: error.message});
    }

});

// updating a product
app.put('/api/products/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        if(!product){
            return res.status(400).json({message: "Product Not found!"})
        }
        
        const updatedproduct = await Product.findById(id);
        res.status(200).json(updatedproduct)

    } catch (error) {
        res.status(500).json({message: error.message})
    }
});

// delete a product
app.delete('/api/products/:id', async(req,res)=>{
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);

        if(!product){
            return res.status(404).json({message: "Product not found"})
        }

        res.status(200).json({message: "Product deleted successfully"});

    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

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