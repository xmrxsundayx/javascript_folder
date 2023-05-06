const express = require('express');
// -->telling that we are using express as backend
const app = express();
const port = 8000;
// -->telling us that we are using port 8000 because our client will be on 3000

// --> This code is from the answer video
// ------------------------------------------
require('./config/joke.config');

app.use(express.json(), express.urlencoded({ extended: true}));

const JokeRoutes = require('./routes/joke.routes');
JokeRoutes(app);

app.listen(port, () => console.log(`Express running on port ${port}`));

// --->This code is from Wills show example
// ------------------------------------------
// require('./config/mongoose.config');
// app.use(express.json(), express.urlencoded({}))

// --> this code is from the platform
// ------------------------------------------
// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });
// --> taking in a request (from localhost:8000/api) and giving response (Hello World).

// app.listen(port, () => console.log(`Listening on port: ${port}`));