// app/routes.js

// grab the models we  created
var Bird = require('./models/bird');
var User = require('./models/user');

    module.exports = function(app) {
        

        // server routes ===========================================================
        // handle things like api calls
        // authentication routes

        // route to handle creating goes here (app.post)

        app.post('/user/new', function(req, res) {
            User.create({
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                password: req.body.password,
                position: req.body.position,
                modifiedOn : Date.now(),
                lastLogin : Date.now()
                }, function( err, user ){
                if(!err){
                console.log("User created and saved for: " + user.firstname + " " + user.lastname);
                }
            });
            res.redirect('/dashboard/admin')
            
            });
        // route to handle delete goes here (app.delete)

        // frontend routes =========================================================
        // route to handle all angular requests
        app.get('/', function(req, res) {
            res.render('index'); // load our index.ejs
        });

        app.get('/folly', function(req, res) {
            res.render('folly');
        });

        app.get('/login', function(req, res) {
            res.render('login');
        });

        app.get('/user/new', function(req, res) {
            res.render('user-new');
        });

        app.get('/dashboard/vet', function(req, res) {
            res.render('dashboard-vet');
        });

        app.get('/dashboard/admin', function(req, res) {
            //user = new User({firstname: "Sumayyah", lastname: 'Yusuf'});
            res.render('dashboard-admin');
        });

        app.get('*', function(req, res) {
            res.sendfile('./public/views/error404.html'); // load our error404.html file
        });

    };
