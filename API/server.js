const express = require('express');
const app = express();
const pizzaRouter = require('./routes/InterviewQuestion/pizzaApp')
const bodyParser = require('body-parser');
const cors = require('cors')
const path = require('path')
require("./config/db")



const PORT = process.env.PORT || 9000;
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(pizzaRouter)

// const bodyParser = require('body-parser');

// Middleware to parse the request body
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// Route to handle form submissions

app.use(express.static(path.join(__dirname, '../pizza-topper/build')))
app.get('*', (req,res)=> res.sendFile(path.join(__dirname, '../pizza-topper/index.html')))

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});


app.listen(PORT, (err) => {
    if (err) {
        throw err;
    }
    console.log(`Server running on Port ${PORT}`)
});
//my work email is enwiya.dev@gmail.com