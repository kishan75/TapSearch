var router = require('express').Router();
var controller = require('../controller');

router.post('/', function (req, res) {
  controller.allParagraphs.addPara(req, res);
});

router.get('/:keyword', function (req, res) {
  controller.allParagraphs.getPara(req, res);
});

router.delete('/', function (req, res) {
  controller.allParagraphs.resetData(req, res);
});

module.exports = router;
