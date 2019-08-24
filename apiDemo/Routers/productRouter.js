const express = require('express');
const router = express.Router();
const Product = require('../Modal/products');

// CRUD Operation

router.get('/',async (req,res,next)=>{
    // Product.find = 'Select * from Product;'
    const response = await Product.find();
    res.json(response);
});

router.get('/:id',async (req,res,next)=>{
    // 'Select * from Product where _id=id'
    const response = await Product.find({_id:req.params.id});
    res.json(response);
});

router.delete('/:id',async (req,res,next)=>{
    const response = await Product.remove({_id:req.params.id});
    res.json({
        result:"Product Deleted",
        response,
    });
});

router.post('/',async (req,res,next)=>{    
    const productName = req.body.productName;
    const price = req.body.price;
    const response = await new Product({
        productName,
        price,
    }).save();
    res.json(response);
});

module.exports = router;