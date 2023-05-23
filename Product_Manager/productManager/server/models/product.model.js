const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    title: { type: String,
    required: [true, "Product title is required"],
    minLength: [2, "Product title must be at least 3 characters long"],
    maxLength: [55, "Product title cant exceed 55 characters"]
    },
    price: { type: String,
    required: [true, "Product price is required"],
    minLength: [1, "Product price must be at least 1 character long"],
    maxLength: [10, "Product price cant exceed 10 characters"]
    },
    description: { type: String,
    required: [true, "Product description is required"],
    minLength: [3, "Product description must be at least 3 characters long"],
    maxLength: [155, "Product description cant exceed 55 characters"]
    },
}, {timestamps: true});
module.exports = mongoose.model('Product', ProductSchema);