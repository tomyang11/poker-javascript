
const Card = require('./Card')

class Deck {

/**************** Private Deck Array ****************/

    // Array of cards as full deck
    #deck = [];

/**************** Constructor ****************/

    constructor() {
        this.populateDeck();
    }

/**************** Other Functions ****************/

    //Populate the deck with 52 cards, in order from 2 to Ace (as 14). Suites 
    //ordered like such: heart, diamond, club, spade
    //Returns nothing
    populateDeck() {
        for (let i = 0; i < 52; i++) {
            let tempSuite;
            if (i % 4 == 0) {
                tempSuite = "Heart";
            } else if (i % 4 == 1) {
                tempSuite = "Diamond";
            } else if (i % 4 == 2) {
                tempSuite = "Club";
            } else {
                tempSuite = "Spade";
            }
            this.#deck.push(new Card(Math.floor(i / 4 + 2), tempSuite));
        }
    }

    //Randomly drawn a card in deck that's not drawn already
    //Note: everytime it lands on a drawn card, it increments up until it is on 
    //      a card that is not drawn yet. If at end of array, loops back to beginning
    //Returns card that's drawn
    drawCard() {
        let rand_idx = Math.floor(Math.random() * 51);
        while(this.#deck[rand_idx].isDrawn()) {  
            rand_idx++;
            if (rand_idx == 52) {
                rand_idx = 0;
            }
        }
        this.#deck[rand_idx].setDrawn(true);
        return this.#deck[rand_idx];     
    }

    //Reset all cards in deck to be not drawn
    //Returns nothing
    reSet() {
        for (let i = 0; i < 52; i++) {
            this.#deck[rand_idx].setDrawn(false);
        }
    }

/**************** Getters ****************/

    //Returns the card number at a certain index in deck
    cardNumAt(idx) {
        return this.#deck[idx].getNum();
    }

    //Returns the suite at a certain index in deck
    cardSuiteAt(idx) {
        return this.#deck[idx].getSuite();
    }

/**************** Functions for Testing ****************/

    drawCardAt(idx) {
        return this.#deck[idx];
    }

}

// Export 
module.exports = Deck;



