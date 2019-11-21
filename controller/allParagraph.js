var allParagraph = {};
var allWords = {};
var collection = {};

collection.addPara = function (req, res) {

    var paragraphs = req.body.paragraph.toLowerCase().split(/\n\s*\n/g);

    Object.keys(paragraphs).forEach(function (element) {       // paragraph parsing

        let paraKey = Object.keys(allParagraph).length + 1;
        allParagraph[paraKey] = {
            paragraph: paragraphs[element]
        };

        var words = paragraphs[element].match(/\b(\w+)\b/g);           // word parsing
        allParagraph[paraKey].wordCount = words.length;

        words.forEach(word => {                                  // entry of every word
            if (allWords[word] != undefined) {

                if (allWords[word][paraKey])
                    allWords[word][paraKey]++;
                else
                    allWords[word][paraKey] = 1;

            } else
                allWords[word] = { [paraKey]: 1 };
        });

    });
    res.send(paragraphs);
};

collection.getPara = function (req, res) {
    var word = req.params.keyword;

    if (allWords[word] == undefined) {
        res.statusMessage = 'word not found';
        res.status(204).end();
        return;
    }

    var topTen = [];
    Object.keys(allWords[word]).sort(function compare(a, b) {                       // compare function for sort
        var aFrequency = 1.000000 * allWords[word][a] / allParagraph[a].wordCount;
        var bFrequency = 1.000000 * allWords[word][b] / allParagraph[b].wordCount;
        if (aFrequency < bFrequency)
            return 1;
        if (aFrequency > bFrequency)
            return -1;
        return 0;
    }).slice(0, 10).forEach(function (paraKey) {
        topTen.push(allParagraph[paraKey].paragraph);
    });

    res.send(topTen);
};

collection.resetData = function (req, res) {
    allParagraph = {};
    allWords = {};
    res.send('reset successfully');
};

module.exports = collection;