var bundle = require("./bundle");

var app = bundle.express();


// define the env here !
app.set('env', 'dev');

// using swig templating
app.engine('html', bundle.swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

// some middleware
app.use(bundle.logger('dev'));
app.use(bundle.express.static(bundle.path.join(__dirname, 'public')));
app.use(bundle.favicon(__dirname + '/public/img/favicon.ico'));
app.use(bundle.bodyParser.json());
app.use(bundle.bodyParser.urlencoded({ extended: false }));
app.use(bundle.cookieParser());
app.use(bundle.session({
    resave: false,
    saveUninitialized: false,
    secret: 'MoonMoon'
}));

// the view can access to the 
app.use(function(req, res, next) {
    res.locals.session = req.session;
    next();
});

// disable swig cache when prod
if (app.get('dev') === 'dev') {
    app.set('view cache', false);
    bundle.swig.setDefaults({ cache: false });
}

bundle.router(app);
bundle.error(app);

// launch HTTP server on port 3000
bundle.launch(app, 3000);