const mongoose = require('mongoose');

const CONNECTION_URL = process.env.DATABASE_URL;

// mongodb connection
mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    console.log('Connection successfull!');
  }).catch((error) => console.log(`No connection: ${error}`));