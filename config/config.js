const express = require("express");
require('dotenv').config();

//live server

const config = process.env.MONGO_URI;
console.log(config)
//local server

module.exports = config;
