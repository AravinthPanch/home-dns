/**
 * Author: Aravinth Panchadcharam
 * Email: me@aravinth.info
 * Date: 26/06/14.
 * Project: Home DNS
 */


var express = require('express')
    , request = require('request')
    , bodyParser = require('body-parser')
    , log4js = require('log4js');

log4js.configure({
    appenders: [
        {   type: "file",
            filename: "/var/log/home-dns/cloud.log",
            maxLogSize: 20480,
            backups: 10
        }
    ]
});


var app = express(),
    logger = log4js.getLogger('Cloud');

var ip = "Not Set";


app.set('port', process.env.PORT || 61000);
app.use(bodyParser.urlencoded({extended: true}));
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});


// HTTP GET to show the updated IP
app.get('/', function (req, res) {
    res.send(ip);
});


// HTTP POST to save the IP
app.post('/', function (req, res, body) {
    ip = req.body.ip;
    logger.info("IP : " + req.body.ip + " is posted");
    res.send("IP is posted");
});


var server = app.listen(app.get('port'), function () {
    logger.info('Listening on port %d', app.get('port'));
});
