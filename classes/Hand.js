
const Card = require('./Card')
const Deck = require('./Deck')

class Hand {

    /**************** Member Variables ****************/
    //Array of player objects
    #playersInHand = [];
    //Int for number of players in the hand (size of #playersInHand)
    #numPlayers;
    //Array of cards on the table
    #tableCards = [];
    //Int
    #potSize;
    //Int
    #minBet;
    //Int
    #smallBlindPos;
    //Int
    #bigBlindPos;
    //Int
    #UTGPos;
    //Deck of cards
    #new_deck = new Deck();

    /**************** Constructor ****************/

    constructor(playersArr, smallBlindPos) {
        this.#playersInHand = playersArr;
        this.#numPlayers = playersArr.length;
        this.#smallBlindPos = smallBlindPos;
        this.#bigBlindPos = (smallBlindPos + 1) % this.#numPlayers;
        this.#UTGPos = (smallBlindPos + 2) % this.#numPlayers;
        this.dealInitialCards(playersArr, this.#numPlayers);
    }

    /**************** Setting Up Hand ****************/

    dealInitialCards(numPlayers) {
        for (let i = 0; i < this.#numPlayers; i++) {
            this.#playersInHand[i].addCard(this.#new_deck.drawCard());
            this.#playersInHand[i].addCard(this.#new_deck.drawCard());
        }
    }

    playAHand() {

    }

    /**************** Getter Functions ****************/

    getPlayerAt(idx) {
        return this.#playersInHand[idx];
    }

    getSmallBlindPos() {
        return this.#smallBlindPos;
    }

    getBigBlindPos() {
        return this.#bigBlindPos;
    }

    getUTGPos() {
        return this.#UTGPos;
    }

    getTableCards() {
        return this.#tableCards;
    }

    /**************** Internal Hand Functions ****************/

    checkBestHand() {

    }

    clearMarkings() {

    }

    removePlayer() {

    }

    // deal a card from the deck onto the table (tableCards array)
    // return nothing
    dealACard() {
        this.#tableCards.push(this.#new_deck.drawCard());
    }

    // deal the flop onto the table
    // return nothing
    dealFlop() {
        this.#tableCards.push(this.#new_deck.drawCard());
        this.#tableCards.push(this.#new_deck.drawCard());
        this.#tableCards.push(this.#new_deck.drawCard());
    }

    /**************** Player Moves Functions ****************/

    //bool
    bet() {

    }

    //bool
    reRaise() {

    }

    //void
    allIn() {

    }

    //bool
    check() {

    }

    //void
    fold() {

    }

    /*********** Testing Functions (Or For Nefarious Purpose) ***********/

    dealRoyalFlushOnTable() {
        let idx = 51;
        for (let i = 0; i < 5; i++) {
            this.#tableCards.push(this.#new_deck.drawCardAt(idx));
            idx -= 4;
        }
    }

    dealRandBoard() {
        for (let i = 0; i < 5; i++) {
            this.dealACard();
        }
    }
  
}

//Export
module.exports = Hand;
