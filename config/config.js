const express = require("express");
require("dotenv").config();

//live server

const config = process.env.MONGO_URI;
// console.log(process.env.REACT_APP_UI_ROUTE, "here");
// console.log(process.env.UI_ROUTE);

//local server

module.exports = config;
