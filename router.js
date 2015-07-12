var fs = require("fs");

module.exports = function(app) {
    var dir = "./routes/",
        files = fs.readdirSync(dir);

    for (var i = 0; i < files.length; i++) {
        var route = require(dir + files[i]);
        app.use(route);
    }
}