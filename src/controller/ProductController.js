const Product = require("../models/Product");

const productController = {
    getAllProduct: async (req, res) => {
        try {
            const products = await Product.find({});
            res.status(200).json(products);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    getEachProduct: async (req, res) => {
        try {
            const product = await Product.findOne({ slug: req.params.slug });
            res.status(200).json(product);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    createEachProduct: async (req, res) => {
        try {
            // create 
            const formData = req.body
            const newProduct = await new Product(formData);
            
            // save db
            const product = await newProduct.save();
                res.status(200).json(product);
        }   catch (err) {
            res.status(400).json(err);
        }
        
    },
}

module.exports = productController;