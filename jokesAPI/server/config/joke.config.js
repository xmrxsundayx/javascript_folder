const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/jokesDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
// this is saying hey mongoose, connect to this mongodb connection string

    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database', err));

// config connects us to the database