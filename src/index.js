const path = require('path');
const express = require('express');
var morgan = require('morgan');
var handlebars = require('express-handlebars');
const app = express();
const port = 3000;

const methodOverride = require('method-override')
const route = require('./routes');

const db = require('./config/db');

// Use methodOverride to method PUT/DELETE
app.use(methodOverride('_method'))

// Connect to db
db.connect();

// use middleware for express
app.use(
	express.urlencoded({
		extended: true, // use library body-parser
	}),
); // client -> server: form html
app.use(express.json()); //client -> server : code javascript json

// use static file
app.use(express.static(path.join(__dirname, 'public')));

//Template engine: express-handlebars setup
const hbs = handlebars.engine({
	extname: '.hbs',
	helpers: {
		sum: (a, b) => a + b,
	},
});
// Rendering engine setup
app.engine('hbs', hbs);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

//morgan
// app.use(morgan("combined"));

//route
route(app); // sperate small

app.listen(port, () => {
	console.log(`Connected to port ${port}`);
});
