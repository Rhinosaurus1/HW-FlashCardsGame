// function to take in full text and cloze text deletion
function ClozeCard(text, cloze) {

  // changes all cases to upper case to ensure match test does not error due to case
  var fullTextUpper = text.toUpperCase();
  var clozeTextUpper = cloze.toUpperCase();

  // logs error if cloze text does not appear in full text
  if (fullTextUpper.includes(clozeTextUpper) !== true) {
    console.log("Sorry but the cloze deletion does not appear in the input text.");
    return;
  }
  // replaces cloze from full text with '...'' and assigns as partial text
  else{
    this.partial = fullTextUpper.replace(clozeTextUpper, " ... ");
    this.fullText = fullTextUpper;
    this.cloze = clozeTextUpper;
  }
};

// exports out constructor function
module.exports = ClozeCard;
