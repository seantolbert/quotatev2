// connect to database
require('dotenv').config();
require('./config/database');

// require the mongoose models
const User = require('./models/user')

let u, i, c, o;