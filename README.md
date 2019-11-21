# TapSearch
A simple web app for searching of paragraphs by words 

* It takes multiple paragraphs in input then parse into paragraphs.
 Assign unique Id to every paragraphs.
 parse every paragraphs into words and store into inverted index format (word->paragraph)

* Given a word to search for, it gives top 10 paragraphs using given algorithm 
*word_occurence/total_words_in_paragraph*
***
## Setup
The API requires Node.js

### To set up and running:

* Clone the repo.
git clone https://github.com/kishan75/TapSearch.git
* open terminal into directory
* Setup the application by installing its dependencies with by 'npm install'
* by 'npm start' command project will be running on http://localhost:3000/.
***
## API Description
#### /allParagraph *(POST)*
* this is *POST API* which takes multiple paragraph in body
* keyName:*paragraph* 
* value:any *string*
* perform parsing work
### /allParagraph/params *(GET)*
* this is *GET API* which takes word in *URL PARAMS*
* gives array of paragraphs (by calculating TOP 10)
* if word is not present ti gives you *204 status code*
### /allParagraph *(DELETE)*
* this is *DELETE API* , it performs deletion or resetting operation of data
------
## Algorithm for searching of paragraph by word
* it calculate *frValue=occurence of word / total words in paragrapgh*
* perform given operation on all paragraphs
* then sort all paragraphs in descending order of *frValue*
* then it gives 10 paragraphs from start
--- 
##### TechStack
* [**EJS**](https://ejs.co/) for front-end
* [**NodeJs**](https://nodejs.org/en/) for Back-end 
* [**ExpressJS**](https://expressjs.com/) as a framework of NodeJs
