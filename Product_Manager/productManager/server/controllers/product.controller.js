const Product = require('../models/product.model');

module.exports = {
// **********CREATE**********
    createProduct: (req, res) => {
        Product.create(req.body)
        .then(newProduct => res.json(newProduct))
        .catch(err => res.json(err))
    },

 // **********READ(ONE)**********
    getProduct: (req, res) => {
        Product.findById(req.params.id)
        .then(oneProduct => res.json(oneProduct))
        .catch(err => res.json(err))
    },

// **********READ(ALL)**********
    getAllProducts: (req, res) => {
        Product.find()
        .then(allProducts => res.json(allProducts))
        .catch(err =>res.json(err))
    },

// **********UPDATE**********
updateProduct: (req, res) => {
    Product.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
    .then(updatedProduct => res.json(updatedProduct))
    .catch(err => res.json(err))
},
// **********DELETE**********
deleteProduct: (req, res) => {
    Product.deleteOne({_id: req.params.id})
    .then(deleteConfirmation => res.json(deleteConfirmation))
    .catch(err => res.json(err))
}
}