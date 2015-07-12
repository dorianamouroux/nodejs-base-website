function error404(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
}

function errorDev(err, req, res, next) {
    res.status(err.status || 500);
    res.render("error", {
        message: err.message,
        error: err
    });
}

function errorProd(err, req, res, next) {
    res.status(err.status || 500);
    res.render("error", {
        message: err.message,
        error: {}
    });
}

module.exports = function(app) {
    app.use(error404);
    if (app.get('env') === 'dev')
        app.use(errorDev);
    else
        app.use(errorProd);
};