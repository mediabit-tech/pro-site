const dotenv = require('dotenv');
const express = require('express');

const app = express();

dotenv.config({ path: './config.env' });
require('./db/connection');
// const User = require('./models/userSchema');

// middleware for understand the input info of user to application in json format
app.use(express.json());

// routes import
const auth = require('./router/auth');
const post = require('./router/post');

// to link our router files to route easily
app.use('/api/v1', auth);
app.use('/api/v1', post);

// middleware
const middleware = (req, res, next) => {
  console.log("This is middleware function for authentication");
}

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`));
