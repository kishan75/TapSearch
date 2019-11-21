var router = require('express').Router();

router.use('/indexing', require('./indexing'));

router.get('/', function (req, res) {
  res.render('index.ejs');
});

module.exports = router;
