// function to take in input for front and back of card
function BasicCard(front, back) {

	//assign this instance to parameters passed into function
	this.front = front;
	this.back = back;

};

// exports out the constructor function
module.exports = BasicCard;