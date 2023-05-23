const Author = require('../models/author.model');

module.exports = {
// **********CREATE**********
    createAuthor: (req, res) => {
        Author.create(req.body)
        .then(newAuthor => res.json(newAuthor))
        .catch(err => res.status(400).json(err))
    },

    // **********READ(ONE)**********
    getAuthor: (req, res) => {
        Author.findById(req.params.id)
        .then(oneAuthor => res.json(oneAuthor))
        .catch(err => res.status(400).json(err))
    },

    // **********READ(ALL)**********
    getAllAuthors: (req, res) => {
        Author.find()
        .then(allAuthors => res.json(allAuthors))
        .catch(err =>res.status(400).json(err))
    },

    // **********UPDATE**********
    updateAuthor: (req, res) => {
        Author.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
        .then(updatedAuthor => res.json(updatedAuthor))
        .catch(err => res.status(400).json(err))
    },

    // **********DELETE**********
    deleteAuthor: (req, res) => {
        Author.deleteOne({_id: req.params.id})
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch((err) => res.status(400).json(err))
    }
}