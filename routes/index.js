var router = require('express').Router();

router.use('/allParagraph', require('./allParagraph'));

router.get('/', function (req, res) {
  res.render('index.ejs');
});

module.exports = router;
