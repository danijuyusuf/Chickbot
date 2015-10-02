// server.js

// modules =================================================
var express        = require('express');
var favicon        = require('express-favicon');
var app            = express();
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var path           = require('path');
var mongoose       = require('mongoose');
var session 	   = require('express-session');
var cookieParser   = require('cookie-parser');
var passport       = require('passport');
var LocalStrategy  = require('passport-local').Strategy;
var User           = require('./app/models/user');


// configuration ===========================================
    
// config files
var db = require('./config/db');// get all data/stuff of the body (POST) parameters
// parse application/json 
app.use(bodyParser.json());

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override')); 

//parse cookies
app.use(cookieParser());

//enable sessions
app.use(session({
	secret: 'kit kart',
	resave: false,
	saveUninitialized: true 
}));


//use user authentication
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());




//further db config

mongoose.connection.on('connected', function () {
	console.log('Mongoose connected to ' + db.url);
		});
mongoose.connection.on('error', function (err) {
	console.log('Mongoose connection error: ' + err);
		});
mongoose.connection.on('disconnected', function () {
	console.log('Mongoose disconnected');
		});
process.on('SIGINT', function() {
	mongoose.connection.close(function () {
		console.log('Mongoose disconnected through app termination');
		process.exit(0);
	});
});

// use favicon
app.use(favicon(__dirname + '/public/images/napay.png'));

// set our port
var port = process.env.PORT || 5; 

// connect to our mongoDB database 
// (uncomment after you enter in your own credentials in config/db.js)
mongoose.connect(db.url); 

// get all data/stuff of the body (POST) parameters
// parse application/json 
app.use(bodyParser.json());

app.set('view engine', 'ejs'); 

//set location of views
app.set('views', path.join(__dirname, '/app/views'));

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public'));
app.use(express.static(path.join(__dirname, '/bower_components')));

// routes ==================================================
require('./app/routes')(app); // configure our routes

// start app ===============================================
// startup our app at http://localhost:5
app.listen(port);               

// shoutout to the user                     
console.log('Yusuf asks you to listen at port ' + port);

// expose app           
exports = module.exports = app;