var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var cors = require('cors');
var config = require('./config')
var app = express();
var corsOptions = {
    origin: 'http://localhost:4000'
};
var port = 4000;
var userCtrl = require('./controllers/userCtrl.js');
var profileCtrl = require('./controllers/profileCtrl.js');


// var middleware = require('./controllers/middleware.js');
// var mainCtrl = require('./controllers/mainCtrl.js');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(corsOptions));
app.use(session({ secret: config.sessionSecret }));
app.use(express.static(__dirname + '/public'));
console.log(__dirname);

app.post('/api/login', userCtrl.login);

app.get('/api/profiles', profileCtrl.getProfiles);



app.listen(port, function(){
  console.log('Listening on port', port);
});
