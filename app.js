
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , lessMiddleware = require('less-middleware')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');
  
var firebase = require('firebase');
var firebaseRoot = new firebase('https://pfcombat.firebaseIO.com/');

var app = express();

// all environments
app.set('ip', process.env.IP || 'localhost');
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(lessMiddleware({src: __dirname + "/public", compress : true }));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', function(req, res) { return routes.index(req, res, firebaseRoot); });
app.get('/users', function(req, res) { return user.list(req, res, firebaseRoot); });
app.get('/user/create', function(req, res) { return user.create(req, res, firebaseRoot); });
app.get('/user/edit/:id', function(req, res) { return user.edit(req, res, firebaseRoot); });
//app.post('/user/create', function(req, res) { return user.save(req, res, firebaseRoot); });
app.post('/user/edit/', function(req, res) { return user.save(req, res, firebaseRoot); });

http.createServer(app).listen(app.get('port'), app.get('ip'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
