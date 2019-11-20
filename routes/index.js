var router = require('express').Router();

router.use('/indexing',require('./indexing'));

router.get('/', function (req, res) {
  res.send('hello there');
  //res.render('index', { title: 'Express' });
});

module.exports = router;
