const dotenv = require('dotenv');
const express = require('express');
const cookieParser = require("cookie-parser");
const bodyParser = require('body-parser');

const app = express();
dotenv.config({ path: './config.env' });
require('./db/connection');

app.use(bodyParser.urlencoded({ extended: true }));
// middleware for understand the input info of user to application in json format
app.use(express.json());
app.use(cookieParser());
// routes import
const auth = require('./router/auth');
const post = require('./router/post');

// to link our router files to route easily
app.use(auth);
app.use(post);

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`));
