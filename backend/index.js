const express = require('express');
const app = express();
const usersRoute = require('./routes/usersRoute')
const port = process.env.port || 4000;
require ('dotenv').config();
const dbConfig = require("./config/dbConfig")
 
app.use(express.json());


app.use('/api/users', usersRoute)

app.listen(port, () => {
    console.log('live on port ' + port)
})