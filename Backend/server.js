var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')
var cors = require('cors')
var passport = require('passport')
var mongoose = require('mongoose')
var cookieParser = require('cookie-parser')
var expressValidator = require('express-validator')
var config = require('./config/database')
var multer = require('multer');
var app = express();
var mime = require('mime');
var crypto = require('crypto');
var zlib = require('zlib');
//var current;
var image;

var storage = multer.diskStorage({

  destination: function(req, file, cb) {
    cb(null, './public/uploads/')
  },
  filename: function(req, file, cb) {
    crypto.pseudoRandomBytes(16, function(err, raw) {
      cb(null, raw.toString('hex') + Date.now() + '.' + mime.extension(file.mimetype));
    })
  }


})
// var upload = multer({dest:'./public/uploads' , rename:function(fieldname ,filename){
//  return filename.replace(/\w+/g,'-').toLowerCase() +Date.now()
// }});
var upload = multer({
  storage: storage
});


var app = express()


// Models
var Fleet = require('./models/fleet')
var Client = require('./models/client')


// Port number
var port = (process.env.PORT || 3000)


// Connect to database
mongoose.connect(config.database)

// On Connection
mongoose.connection.on('connected', () => {
  console.log('Connected to database ' + config.database)
})

// On Error
mongoose.connection.on('error', (err) => {
  console.log('Database error: ' + err)
})


// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')))


// CORS Middleware
app.use(cors())


// Body Parser Middleware
app.use(bodyParser.urlencoded({}))
app.use(bodyParser.json())
app.use(cookieParser())


// Passport Middleware
app.use(passport.initialize())
//app.use(passport.session())
//require('./config/passport')(passport)

// Express Validator Middleware
app.use(expressValidator({
  customValidators: {
    isFleetNameAvailable(name) {
      return new Promise((resolve, reject) => {
        Fleet.findOne({
          name: name
        }, (err, fleet) => {
          if (err) throw err;
          if (fleet == null) {
            resolve();
          } else {
            reject();
          }
        });
      });
    },
    isClientNameAvailable(name) {
      return new Promise((resolve, reject) => {
        Client.findOne({
          name: name
        }, (err, client) => {
          if (err) throw err;
          if (client == null) {
            resolve();
          } else {
            reject();
          }
        });
      });
    }
  }
}));

// ALLOWING FRONT END TO COMMUNICATEs
app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Headers", "Authorization, Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
  next();
});


// Set view engine
app.set('view engine', 'ejs')


// Routes
var adminRoutes = require('./routes/adminRoutes')
var userRoutes = require('./routes/userRoutes')

app.use('/admin', adminRoutes)
app.use('/user', userRoutes)

// 404 for any other route
app.use(function(req, res, next) {
  if (!res.headersSent) {
    res.status(404).json({
      status: 'failed',
      message: 'The requested route was not found.'
    });
  }

  next();
});


// Starting the server
app.listen(port, () => {
  console.log('Server started on port ' + port)
})
