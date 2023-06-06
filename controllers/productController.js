import Product from "../models/Product.js";

export const getProducts = async (req,res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const saveProduct = async (req,res) => {
    const product = new Product(req.body);
    try {
        const savedProduct = await product.save();
        res.status(200).json(savedProduct);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const updateProduct = async (req,res) => {
    try {
        const updatedProduct = await Product.updateOne({_id:req.params.id}, {$set:req.body});
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}