const mongoose = require('mongoose');
const AuthorSchema = new mongoose.Schema({
    authorName: { type: String,
    required: [true, "Author name is required"],
    minLength: [3, "Author name must be at least 3 characters long"],
    maxLength: [55, "Author name cant exceed 55 characters"]
    },
}, {timestamps: true});
module.exports = mongoose.model('Author', AuthorSchema);