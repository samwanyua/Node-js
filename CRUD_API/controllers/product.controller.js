const Product = require('../models/product.model')

// get all products
const getProducts = async (req,res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

// get a single product
const getProduct =  async (req, res) =>{
    try {
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

// create a product
const postProduct =  async (req, res) => {
    try{
        const product = await Product.create(req.body)
        res.status(201).json(product)

    } catch(error){
        res.status(500).json({message: error.message});
    }

}

// update a product
const updateProduct = async(req, res) => {
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
}

// delete a product
const deleteProduct = async(req,res)=>{
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
}

module.exports = {
    getProducts,
    getProduct,
    postProduct,
    updateProduct,
    deleteProduct
}