console.log("Up and running!");

var cards = ["queen","queen","king","king"];
var cardOne = cards[0];
var cardTwo = cards[2];
var cardsINPLAY = [];

cardsINPLAY.push(cardOne);
cardsINPLAY.push(cardTwo);

console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);

if (cardsINPLAY.length === 2) {
	if (cardsINPLAY[0] === cardsINPLAY[1]){
		alert("You found a match!");
	}
	else {
		alert("Sorry, try again.");
	}
}


console.log("Up and running!");

var cards = ["queen","queen","king","king"];
var cardsINPLAY = [];

var checkForMatch = function(cardID) {
if (cardsInPlay[0] === cardsInPlay[1]) {
console.log("You found a match!");
} else {
console.log("Sorry, try again.");
}


var flipcard = function(cardID) {

	console.log("User flipped" + cards[cardId])

	cardsInPlay.push(cards[cardId])
	}

}
