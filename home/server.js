/**
 * Author: Aravinth Panchadcharam
 * Email: me@aravinth.info
 * Date: 26/06/14.
 * Project: Home DNS
 */


var http = require('http'),
	request = require('request'),
	log4js = require('log4js');

log4js.configure({
	appenders: [
		{
			type: "file",
			filename: "/home/pi/home-dns/home.log",
			maxLogSize: 20480,
			backups: 10
		}
	]
});

var logger = log4js.getLogger('Home');
var ipOld = 'Not Set';
var ip = '';
var interval = 5 * 60 * 1000;


requestIP();
setInterval(function () {
	requestIP()
}, interval);


//ifconfig.me
//icanhazip.com
function requestIP() {
	logger.info("Requesting IP");
	request('http://ipecho.net/plain', function (error, response, body) {
		if (!error && response.statusCode == 200) {
			ip = body;
			logger.info("Current IP is " + ip);
			if (ip != ipOld) {
				postIP(ip);
				ipOld = ip
			} else {
				logger.info("IP is not changed")
			}
		}
	})
}

function postIP(ip) {
	request.post('http://your-cloud-domain/', function (error, response, body) {
		if (!error && response.body == 'IP is posted') {
			logger.info("IP " + ip + ' is posted')
		} else {
			logger.error(error)
		}
	}).form({'ip': ip});

	//request.post('http://localhost:61000').form({'ip': ip})
}