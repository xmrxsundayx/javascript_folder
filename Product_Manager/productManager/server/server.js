const express = require('express');
const app = express();
const cors = require('cors')
const port =8000;
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
require('./config/product.config')
require('./routes/product.routes')(app)

app.listen(port, () =>console.log(`listening on port: ${port}`));