// Import class definitions
const Card = require('./classes/Card')
const Deck = require('./classes/Deck')
const Player = require('./classes/Player')
const Hand = require('./classes/Hand')


const new_card = new Card(4, "Hearts");
const new_deck = new Deck();
const new_player = new Player("Test Player", 5);

// initialize a new hand for testing
// let playersInHand = [];
// const player1 = new Player("Tom", 5);
// playersInHand.push(player1);
// const player2 = new Player("Ben", 5);
// playersInHand.push(player2);
// const player3 = new Player("Oliver", 5);
// playersInHand.push(player3);
// const player4 = new Player("Brendan", 5);
// playersInHand.push(player4);
// const player5 = new Player("Charlie", 5);
// playersInHand.push(player5);
// const new_hand = new Hand(playersInHand, 3);

// // tests for card dealing
// new_hand.dealFlop();
// new_hand.dealACard();
// new_hand.dealACard();
// for (let i = 0; i < 5; i++) {
//     let tableCardsArr = new_hand.getTableCards();
//     console.log(tableCardsArr[i].getNum());
//     console.log(tableCardsArr[i].getSuite());
// }

// tests for flush check (doesn't always work if a player has a RF card)
// let playersInHand = [];
// const player1 = new Player("Tom", 5);
// playersInHand.push(player1);
// const new_hand = new Hand(playersInHand, 0);
// console.log("initial hand:");
// console.log(new_hand.getPlayerAt(0).getPlayerHand()[0].getNum());
// console.log(new_hand.getPlayerAt(0).getPlayerHand()[0].getSuite());
// console.log(new_hand.getPlayerAt(0).getPlayerHand()[1].getNum());
// console.log(new_hand.getPlayerAt(0).getPlayerHand()[1].getSuite());
// console.log("--------------");
// new_hand.dealRoyalFlushOnTable();
// let tableCardsArr = new_hand.getTableCards();
// console.log(player1.checkFlush(tableCardsArr));
// for (let i = 0; i < 5; i++) {
//     console.log(new_hand.getPlayerAt(0).getPlayerHand()[i].getNum());
//     console.log(new_hand.getPlayerAt(0).getPlayerHand()[i].getSuite());
// }

// test for hand checker functions 
let playersInHand = [];
const player1 = new Player("Tom", 5);
playersInHand.push(player1);
const new_hand = new Hand(playersInHand, 0);
console.log("-----Initial hand-----");
console.log(new_hand.getPlayerAt(0).getPlayerHand()[0].getNum());
console.log(new_hand.getPlayerAt(0).getPlayerHand()[0].getSuite());
console.log(new_hand.getPlayerAt(0).getPlayerHand()[1].getNum());
console.log(new_hand.getPlayerAt(0).getPlayerHand()[1].getSuite());
console.log("-----The Board-----");
new_hand.dealRandBoard();
for (let i = 0; i < 5; i++) {
    console.log(new_hand.getTableCards()[i].getNum());
    console.log(new_hand.getTableCards()[i].getSuite());
}
console.log("-----Hand Values-----");
let tableCardsArr = new_hand.getTableCards();
console.log(player1.checkQuads(tableCardsArr)); //check for quads
console.log(player1.checkFlush(tableCardsArr)); //check for flush
console.log(player1.checkTrips(tableCardsArr)); //check for trips
console.log(player1.checkPair(tableCardsArr)); //check for pair
//console.log(player1.checkHighCard(tableCardsArr)); //check high card
console.log("-----Best 5 Card Hand-----");
for (let i = 0; i < 5; i++) {
    console.log(new_hand.getPlayerAt(0).getPlayerHand()[i].getNum());
    console.log(new_hand.getPlayerAt(0).getPlayerHand()[i].getSuite());
}

//testing hand initialization
// console.log(new_hand.getPlayerAt(3).getPlayerName());
// console.log(new_hand.getPlayerAt(3).getPlayerHand()[0].getNum());
// console.log(new_hand.getPlayerAt(3).getPlayerHand()[0].getSuite());
// console.log(new_hand.getPlayerAt(3).getPlayerHand()[1].getNum());
// console.log(new_hand.getPlayerAt(3).getPlayerHand()[1].getSuite());
// console.log(new_hand.getSmallBlindPos());
// console.log(new_hand.getBigBlindPos());
// console.log(new_hand.getUTGPos());


// test for constructing card object
//console.log(new_card.getNum());

// test to check that deck was properly populated
// for (let i = 0; i < 52; i++) {
//     console.log(new_deck.cardNumAt(i));
//     console.log(new_deck.cardSuiteAt(i));
// }

// test to check cards can be all drawn
// for (let i = 0; i < 52; i++) {
//     let card = new_deck.drawCard();
//     console.log(card.getNum());
//     console.log(card.getSuite());
// }

//test for possible bet (less than chip size)
// new_player.makeBet(2);
// console.log(new_player.getStackAmt());

//test for constructor
// console.log(new_player.isInHand());
