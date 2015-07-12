var http = require("http"),
    portSever;

function onHttpError(error) {
    if (error.syscall !== "listen") {
        throw error;
    }

    switch (error.code) {
        case 'EACCES':
            console.error('Port ' + portSever + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error('Port ' + portSever + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

function onListening() {
    console.log('Listening on port ' + portServer);
}

module.exports = function(app, port) {
    var server = http.createServer(app);

    portServer = port;
    server.listen(port);
    server.on("error", onHttpError);
    server.on("listening", onListening);
};