const express = require('express');

//live server

//mongodb+srv://dennisenwiya:WnGK8fGArdmHquJ9@cluster0.au3bh2l.mongodb.net/
// mongodb+srv://dennisenwiya:kibwsrM2E5RiOZqz@cluster0.au3bh2l.mongodb.net/?retryWrites=true&w=majority
// let config = "mongodb+srv://dennisenwiya:WnGK8fGArdmHquJ9@cluster0.au3bh2l.mongodb.net/pizzaAPI"
let config = 'mongodb+srv://dennisenwiya:kibwsrM2E5RiOZqz@cluster0.au3bh2l.mongodb.net/pizzaAPI'
let tConfig = 'pizzaAPI'

 //local server

// let config = 'mongodb://127.0.0.1:27017/drugAPI'
// let tConfig = 'drugAPI'


module.exports = config, tConfig