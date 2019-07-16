const express = require('express');
const path = require('path');
// const cookieParser = require('cookie-parser');
// const logger = require('morgan');

const app = express();
// app.use(express.static('public'));
// app.set('views', __dirname+'/views/');
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

// main GET response
app.get('/', function (req, res, next) {
    // res.send('Hello World!')
    res.render('index');
});

app.get('/login', function (req, res, next) {
    res.send('Login Page');
    //res.render('login_page');
});

app.get('/users', function (req, res, next) {
    res.send('Users Page');
    //res.render('users_page');
});

app.get('/users/*', function (req, res, next) {
    res.send('Users Page');
    //res.render('user_page');
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handling
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

var serv = app.listen(3000, function () {
    var host = serv.address().address;
    var port = serv.address().port;

    console.log('Example app listening on port 3000!')
    console.log("Example app listening at http://%s:%s", host, port)
})
