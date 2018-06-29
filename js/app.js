/*
 * Create a list that holds all of your cards
 */

const pics = ['fa fa-diamond','fa fa-diamond', 'fa fa-paper-plane-o', 'fa fa-paper-plane-o', 'fa fa-anchor', 'fa fa-anchor', 'fa fa-bolt', 'fa fa-bolt', 'fa fa-cube', 'fa fa-cube', 'fa fa-leaf', 'fa fa-leaf', 'fa fa-bicycle', 'fa fa-bicycle', 'fa fa-bomb', 'fa fa-bomb'];
let cardMoves = 0
const numMoves = document.querySelector('moves');
const table = document.querySelector('.deck');
 //   - loop through each card and create its HTML

for (let i = 0; i<pics.length; i++) {
 	const cards = document.createElement('li');
 	cards.classList.add('card');
 	cards.innerHTML = '<i class="' + pics[i] +'"></i>';
 	//   - add each card's HTML to the page
	table.appendChild(cards); 	
}


/*
 * Display the cards on the page

 *   - shuffle the list of cards using the provided "shuffle" method below
*/

/*
 
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
let flippedCard = [];
let matchedCard = [];



// set up the event listener for a card. If a card is clicked:
table.addEventListener('click', flipCard, false);
//  - display the card's symbol (put this functionality in another function that you call from this one)
function flipCard(evt) {
	if (evt.target !== evt.currentTarget) {
		const clickedCard = evt.target;
		clickedCard.classList.add('show', 'open');
		flippedCard.push(clickedCard);
				
			//if the list already has another card, check to see if the two cards match
		if (flippedCard > 2){
			firstCard.classList.remove('show', 'open');
			secondCard.classList.remove('show', 'open');
		}
		const firstCard = flippedCard[0];
		const secondCard = flippedCard[1];


		if (firstCard && secondCard) {
			cardMoves +=1 ;
			numMoves.innerHTML = cardMoves;
			
		}
		
		
		if (flippedCard.length === 2 && firstCard.innerHTML == flippedCard[1].innerHTML && 
			firstCard.innerHTML === flippedCard[1].innerHTML){
			//if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)

			clickedCard.classList.add('match');
			firstCard.classList.add('match')
			console.log('match!!');	
			flippedCard = [];
			matchedCard.push(firstCard, secondCard);
			gameWon();

		}else if (flippedCard.length === 2 && firstCard.innerHTML != flippedCard[1].innerHTML){
			console.log('no match');

			setTimeout(wait, 1000);
			function wait(){
				firstCard.classList.remove('show', 'open');			
				secondCard.classList.remove('show', 'open')
				
			}
			flippedCard = [];
		}else {
			console.log('select another');
		}
	}

	evt.stopPropagation();
}

function gameWon(){
	setTimeout (wait, 100);
	function wait() {
		if (pics.length === matchedCard.length) {
		modal('you won!!');
		}

	}
	
}


/*
 
 
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - 
 *    + 
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
