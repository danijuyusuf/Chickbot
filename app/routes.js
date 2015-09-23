// app/routes.js

// grab the nerd model we just created
var Bird = require('./models/bird');
var User = require('./models/user');

    module.exports = function(app) {
        

        // server routes ===========================================================
        // handle things like api calls
        // authentication routes

        // sample api route
        // app.get('/api/nerds', function(req, res) {
        //     // use mongoose to get all nerds in the database
        //     Nerd.find(function(err, nerds) {

        //         // if there is an error retrieving, send the error. 
        //                         // nothing after res.send(err) will execute
        //         if (err)
        //             res.send(err);

        //         res.json(nerds); // return all nerds in JSON format
        //     });
        // });

        // route to handle creating goes here (app.post)
        // route to handle delete goes here (app.delete)

        // frontend routes =========================================================
        // route to handle all angular requests
        app.get('/', function(req, res) {
            res.sendfile('./public/views/index.html'); // load our public/index.html file
        });

        app.get('/folly', function(req, res) {
            res.render('folly');
        });

        app.get('/login', function(req, res) {
            res.render('login');
        });

        app.get('/user/new', function(req, res) {
            res.render('new-user');
        });

        app.get('/login', function(req, res) {
            res.render('login');
        });

        app.get('/dashboard/vet', function(req, res) {
            res.render('dashboard-vet');
        });

        app.get('/dashboard/admin', function(req, res) {
            user = new User({firstname: "Yusuf", lastname: "Daniju"});
            res.render('dashboard-admin');
        });

        app.get('*', function(req, res) {
            res.sendfile('./public/views/error404.html'); // load our error404.html file
        });

    };
