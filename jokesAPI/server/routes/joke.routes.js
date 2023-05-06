const JokeController = require('../controllers/joke.controller');

module.exports = (app) => {
    app.get('/api/jokes', JokeController.getAllJokes);
    app.post('/api/jokes', JokeController.createJoke);
    app.get('/api/jokes/:id', JokeController.getOneJoke);
    // Changes all values in the db to match the req.body
    app.put('/api/jokes/:id', JokeController.updateJoke);
    // Changes only the values in the req.body
    app.delete('/api/jokes/:id', JokeController.deleteJoke);
    app.get('/api/joke/random', JokeController.randomJoke);
}