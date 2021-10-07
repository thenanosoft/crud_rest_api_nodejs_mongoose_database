require("dotenv").config()

// Modules
const express = require("express");
const mongoose = require("mongoose");

// Custom Modules
const routes = require('./routes/routes');
const connection = require('./database/conn')

const app = express();
app.use(express.json());

// Middlewares
app.use(routes);

// Database connection
connection.conn;

const port = process.env.PORT || 3000
app.listen(port, console.log(`Server is listening on http://localhost:${port}`))

