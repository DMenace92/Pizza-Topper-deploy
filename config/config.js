const express = require("express");

require("dotenv").config();
//live server

let config = process.env.MONGO_URI;
//local server

module.exports = config;
