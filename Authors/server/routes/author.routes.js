const AuthorController = require('../controllers/author.controller');
module.exports = (app) => {
    app.get('/api/author', AuthorController.getAllAuthors);
    app.post('/api/author/new', AuthorController.createAuthor);
    app.get('/api/author/:id', AuthorController.getAuthor);
    app.patch('/api/author/edit/:id', AuthorController.updateAuthor);
    app.delete('/api/author/:id', AuthorController.deleteAuthor);
}