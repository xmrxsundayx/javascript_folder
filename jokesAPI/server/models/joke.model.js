const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "setup is required"],
        minlength: [2, 'Title must be at least 2 characters'],
        maxlength: [255, 'Title can not exceed 255 characters']
    },
    punchline: {
        type: String,
        required: [true, "punchline is required"],
        minlength: [2, 'Title must be at least 2 characters'],
        maxlength: [255, 'Title can not exceed 255 characters']
    }
}, {timestamps: true});

module.exports = mongoose.model('Joke', JokeSchema)



// this is the blueprint for what datatype we have & some validations for custom errors

// original model (without validation) was this...

// const ShowSchema = new.mongoose.Schema({
//     name: {type: String},
//     genre: {type: String},
//     release_year: {type: Number}
// }, {timestamps: true});

// const Show = mongoose.model('show', Showschema);
// module.exports = Show;