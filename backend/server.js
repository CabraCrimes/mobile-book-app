require('dotenv').config();
const express = require('express');
const credentials = require('./middleware/credentials');
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const config = require('./config/config');

const app = express();

// MIDDLEWARE
// Handle option credentials check - before CORS
app.use(credentials);
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}));

// ROUTES
app.use('/', require('./routes/bookRoutes'));

app.listen(config.port, () => {
    console.log(`Server running on port ${config.hostUrl}`)
  });