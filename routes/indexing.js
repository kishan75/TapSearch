var router = require('express').Router();

/* GET users listing. */
router.post('/', function (req, res) {
  var paragraphs = req.body.para.split("\n\n");
  var data = req.body.para.match(/\b(\w+)\b/g);
  res.send(paragraphs);
});

module.exports = router;
