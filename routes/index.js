var bundle = require("../bundle"),
    router = bundle.express.Router();

router.get('/', function(req, res, next) {
    res.render("index", {});
});

module.exports = router;