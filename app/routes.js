// app/routes.js


// grab the models we  created
var Bird = require('./models/bird');
var User = require('./models/user');
//var sess;
var passport = require('passport');

    module.exports = function(app) {
        

        // server routes ===========================================================
        // handle things like api calls
        // authentication routes

        // route to handle creating goes here (app.post)
        
        // app.post('/user/new', function(req, res) {
        //     User.create({
        //         firstname: req.body.firstname,
        //         lastname: req.body.lastname,
        //         email: req.body.email,
        //         password: req.body.password,
        //         position: req.body.position,
        //         modifiedOn : Date.now(),
        //         lastLogin : Date.now()
        //         }, function( err, user ){
        //             if(err) {
        //                 console.log(err);
        //                 if(err.code === 11000) {
        //                     res.redirect('/user/new?exists=true');
        //                 } else {
        //                     res.redirect('/?error=true');
        //                 }
        //             } else {
        //                 //Success
        //                 sess = req.session;
        //                 sess.email = req.body.email;
        //                 sess.password = req.body.password;
        //                 sess.position = req.body.position;
        //                 sess.firstname = req.body.firstname;
        //                 sess.lastname = req.body.lastname;
        //                 console.log("User created and saved for: " + user.firstname + " " + user.lastname);
        //                 res.redirect('/dashboard/admin'+user.email);
        //             }
        //         });            
        //     });
       // app.post('/login',
       //      passport.authenticate('local', { successRedirect: '/dashboard/admin',
       //                              successFlash: 'welcome',
       //                             failureRedirect: '/login',
       //                             failureFlash: 'invalid email or password' })
       //     );
       // app.post('/login', function(req, res, next) {
       //    passport.authenticate('local', function(err, user, info) {
       //      if (err) { return next(err); }
       //      if (!user) { return res.redirect('/login'); }
       //      req.logIn(user, function(err) {
       //        if (err) { return next(err); }
       //        return res.redirect('/dashboard/admin');
       //      });
       //    })(req, res, next);
       //  });
        // route to handle delete goes here (app.delete)

        // frontend routes =========================================================
        // route to handle all angular requests

        app.get('/', function (req, res) {
      res.render('index', { user : req.user });
  });

  app.get('/register', function(req, res) {
      res.render('register', { });
  });

  app.post('/register', function(req, res) {
      User.register(new User({ username : req.body.username}), req.body.password, function(err, user) {
          if (err) {
            return res.render("register", {info: console.info("Sorry. That email already exists. Try again.")});
          }

          passport.authenticate('local')(req, res, function () {
            res.redirect('/dashboard/admin');
          });
      });
  });

  app.post('/login', passport.authenticate('local'), function(req, res) {
      res.redirect('/dashboard/admin');
  });


  app.get('/login', function(req, res) {
      res.render('login', { user : req.user });
  });
        // app.get('/', function(req, res) {
        //     res.render('index'); // load our index.ejs
        // });

        app.get('/folly', function(req, res) {
            res.render('folly');
        });

        // app.get('/login', function(req, res) {
        //     res.render('login');
        // });

        // app.get('/logout', function(req, res) {
        //     req.session.destroy();
        //     res.redirect('/');
        // });
 app.get('/logout', function(req, res) {
      req.logout();
      res.redirect('/');
  });

        // app.get('/user/new', function(req, res) {
        //     res.render('user-new');
        // });

        app.get('/dashboard/vet', function(req, res) {
            res.render('dashboard-vet');
        });

        app.get('/dashboard/admin', function(req, res) {
            //user = new User({firstname: "Sumayyah", lastname: 'Yusuf'});
            if(req.user) {
                res.render('dashboard-admin');
            } else {
                res.redirect('/');
            }
        });

        app.get('*', function(req, res) {
            res.sendfile('./public/views/error404.html'); // load our error404.html file
        });

    };