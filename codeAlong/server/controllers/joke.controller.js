const Joke = require('../models/joke.model');

module.exports = {

    // CRUD all in one
    // create
    createJoke: (req, res) => {
        Joke.create(req.body)
            .then(newJoke => res.json(newJoke))
            .catch(err => res.status(400).json(err));
    },
    // Read (all)
    getAllJokes: (req, res) => {
        Joke.find()
        .then(allJokes => res.json(allJokes))
        .catch(err => res.json(err));
    },
    // Read (one)
    getOneJoke: (req, res) => {
        Joke.findById(req.params.id)
        .then(oneJoke => res.json(oneJoke))
        .catch(err => res.json(err))
    },

    // update, new is true is going to give the updated value/document, run validators as true means that before we update it will go into our model and say okay, if its in our database we know it passed validations but we want to make sure they're not updating to something that doesn't pass validations, this is having it run validators again. if they are valid then. works with put and patch
    updateJoke: (req, res) => {
        Joke.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
        .then(updatedJoke => res.json(updatedJoke))
        .catch(err => res.json(err))
    },


    // delete
    deleteJoke: (req, res) => {
        Joke.findByIdAndDelete(req.params.id)
        .then(result => res.json(result))
        .catch(err => res.json(err))
    }
}


// req.body we are requesting the key body and its values. 
// req.params says within this request there is a value that we'll call 'id' and we want to grab that information. 'id' is coming from routes id?
// 400 is a status code
