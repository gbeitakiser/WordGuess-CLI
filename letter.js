var letterExport = function() {
    
//=============================
//Variables
// Try to use a function/variable that restricts user input to just letters and no symboms or nubmers (forgot what this is called).
var userInput = process.argv[2].toUpperCase();



//=============================
//Letter Constructor Function
function Letter(letterToGuess) {
    this.letterStore = letterToGuess.toUpperCase(),
    this.beenGuessed = false
    this.returnChar = function() {
        if (this.beenGuessed === true) {
            console.log(this.letterStore);
        } else {
            console.log("_");
        }
    }
    this.checkLetter = function() {
        if (userInput === this.letterStore) {
            // Do I need to call the returnChar() function if this is correct?
            this.beenGuessed = true;
            this.returnChar()
        } else {
            console.log("Incorrect!");
        }
    }
}



var newLetter = new Letter("G");

console.log(newLetter);
console.log("==============")

newLetter.checkLetter();

};  module.exports = letterExport;