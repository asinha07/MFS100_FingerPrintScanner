var cordova = require('cordova');

var echo = function(arg0, success, error) {
    cordova.exec(success, error, "ModusEcho", "echo", [arg0]);
};

var echojs = function(arg0, success, error) {
    if (arg0 && typeof(arg0) === 'string' && arg0.length > 0) {
        console.log(arg0);
    } else {
        error('Empty message!');
    }
};

var failed = function() {
	console.log("failed");
}
echo("Hi",echojs,failed);
