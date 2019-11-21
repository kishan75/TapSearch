var router = require('express').Router();

var allParagraph = {};
var allWords = {};

router.post('/', function (req, res) {
  var paragraphs = req.body.para.toLowerCase().split(/\n\s*\n/g);

  Object.keys(paragraphs).forEach(function (element) {

    let paraKey = Object.keys(allParagraph).length + 1;
    allParagraph[paraKey] = {
      paragraph: paragraphs[element]
    };

    var words = paragraphs[element].match(/\b(\w+)\b/g);
    allParagraph[paraKey].wordCount = words.length;

    words.forEach(word => {

      if (allWords[word] != undefined) {

        if (allWords[word][paraKey]) {
          allWords[word][paraKey]++;
        }
        else {
          allWords[word][paraKey] = 1;
        }

      } else {
        allWords[word] = { [paraKey]: 1 };
      }

    });

  });
  res.send(allWords);
});

router.get('/:keyword', function (req, res) {
  var word = req.params.keyword;

  if (allWords[word] == undefined)
    res.send('word not found');

  var topTen = Object.keys(allWords[word]).sort(function compare(a, b) {
    var aFrequency = 1.000000 * allWords[word][a] / allParagraph[a].wordCount;
    var bFrequency = 1.000000 * allWords[word][b] / allParagraph[b].wordCount;
    if (aFrequency < bFrequency)
      return 1;
    if (aFrequency > bFrequency)
      return -1;
    return 0;
  }).slice(0, 10).map(function (paraKey) {
    return { [paraKey]: allParagraph[paraKey] };
  });

  res.send(topTen);
});

router.delete('/', function (req, res) {
  allParagraph = {};
  allWords = {};
  res.send('done');
});

module.exports = router;
