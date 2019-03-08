var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:type?/:param1?/:param2?/:param3?/:param4?', function(req, res, next) {
    res.render('mobile/common/index', {
        title: 'Mobile Express',
        type: req.params.type || 'index',
        param1: req.params.param1 || '',
        param2: req.params.param2 || '',
        param3: req.params.param3 || '',
        param4: req.params.param4 || '',
    });
});

module.exports = router;
