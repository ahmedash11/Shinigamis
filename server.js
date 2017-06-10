var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')
var cors = require('cors')
var passport = require('passport')
var mongoose = require('mongoose')
var cookieParser = require('cookie-parser')
var config = require('./config/database')
var fs = require('fs')
var https = require('https')




//--------------------------




var app = express()

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


// ALLOWING FRONT END TO COMMUNICATE
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
//var visitorRoutes = require("./routes/visitorRoutes")

//app.use('/', visitorRoutes)


// 404 for any other route

app.use(function(req, res, next) {
    if(!res.headersSent){
        res.status(404).json({
            status:'failed',
            message: 'The requested route was not found.'
        });
    }

    next();
});


// Starting the server
/*
app.listen(port, () => {
  console.log('Server started on port ' + port)
})
*/

const httpsOptions = {
	cert: fs.readFileSync(path.join(__dirname, 'config/ssl', 'server.crt')),
	key: fs.readFileSync(path.join(__dirname, 'config/ssl', 'server.key'))
} 

https.createServer(httpsOptions, app).listen(port, function(){
	console.log('Server started on port ' + port)
})


//--------------------------



