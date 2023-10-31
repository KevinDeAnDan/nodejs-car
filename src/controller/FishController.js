const Fish = require("../models/Fish");

const fishController = {
    
    getAllFish: async (req, res) => {
        try {
            const products = await Fish.find({});
            res.status(200).json(products);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    getEachFish: async (req, res) => {
        try {
            const product = await Fish.findOne({ slug: req.params.slug });
            res.status(200).json(product);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    createEachFish: async (req, res) => {
        try {
            // create 
            const formData = req.body
            const newProduct = await new Fish(formData);
            
            // save db
            const product = await newProduct.save();
                res.status(200).json(product);
        }   catch (err) {
            res.status(400).json(err);
        }
        
    },
    // getEachProduct: async (req, res) => {
    //     try {
    //         const product = await Product.findById(req.params.id);
    //         res.status(200).json(product);
    //     } catch (err) {
    //         res.status(500).json(err);
    //     }
        
    // },
    // editEachProduct: async (req, res) => {
    //     try {
    //         const productId = req.params.slug;
    //         const productToUpdate = await Fish.findById(productId)
    //         await productToUpdate.save();
    //         res.status(200).json(req.body);
    //     } catch (err) {
    //         res.status(500).json(err);
    //     }
    // },
    deleteEachFish:  async (req, res) => {
        try {
          const product = await Fish.deleteOne({_id: req.params.id});
          res.status(200).json(product);
        } catch (err) {
          res.status(500).json(err);
        }
    }
}

module.exports = fishController;