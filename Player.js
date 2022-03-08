const Card = require('./Card')

class Player {

/**************** Member Variables ****************/
    // Int
    #chipStack;
    // Bool
    #inHand = true;
    // String
    #playerName;
    // Int
    #handValue;
    // Array of Cards
    #playerHand = [];

/**************** Constructor ****************/

    constructor(name, initialChipStack) {
        this.#playerName = name;
        this.#chipStack = initialChipStack;
    }

/**************** Player Status ****************/

    // marks player as inHand or not inHand
    setInHand(inHand) {
        this.#inHand = inHand;
    }

    // returns whether player is in the hand
    isInHand() {
        return this.#inHand;
    }

/**************** Player Chip Stack ****************/

    // Adds money to the chip stack
    addToChipStack(amount) {
        this.#chipStack = amount;
    }

    makeBet(amount) {
        // Make sure bet is less than or equal to total chip stack
        if (amount > this.#chipStack) {
            return false;
        } else {
            // Remove amount from chipstack
            this.#chipStack = this.#chipStack - amount;
            return true;
        }
    }

    // returns the player's stack amount
    getStackAmt() {
        return this.#chipStack;
    }
    
    /**************** Player Name ****************/

    // Updates the players's name
    setPlayerName(name) {
        this.#playerName = name;
    }

   // returns the player's name 
    getPlayerName() {
        return this.#playerName;
    }

    /**************** Player Cards ****************/

    // adds the given card to the player's hand
    addCard(card) {
        this.#playerHand.push(card);
    }

    // return the given player's hand array
    getPlayerHand() {
        return this.#playerHand;
    }

    /**************** Evaluate Player's Hand ****************/

    // Returns an int representing the player hand
    evaluateHand() {
        // Here's the bigboy... definitely use helper functions
        // Set this.#handValue to proper int
    }

    //returns the player's hand value
    getHandValue() {
        return this.#handValue;
    }

    /**************** Evaluate Hand Helpers ****************/

    // Parameter: tableCards array for 5 cards on the board
    // Purpose: make playerHand and return handValue for high card
    // Return: handValue
    checkHighCard(tableCards) {
        //concatenate the 5 cards on board with the player's 2 cards
        let temp = this.concatenator(tableCards);
        //sort cards from high to low based on card number
        temp.sort((a, b) => (a.getNum() < b.getNum()) ? 1 : -1);
        //make and store the player's hand of best 5 cards
        this.updatePlayerHand(temp);
        //set and return #handValue
        this.#handValue = 10000 + temp[0].getNum();
        return this.#handValue;
    }

    // Parameter: tableCards array for 5 cards on the board
    // Purpose: check for one pair, make playerHand if found and find handValue
    // Return: handValue
    checkPair(tableCards) {
        return this.pairTripQuadHelper(tableCards, 2, 20000);
    }

    // Parameter:
    // Purpose:
    // Return: 
    checkTwoPair(tableCards) {
        let temp = this.concatenator(tableCards);
        

    }

    // Parameter: tableCards array for 5 cards on the board
    // Purpose: check for trips, make playerHand if found and find handValue
    // Return: handValue
    checkTrips(tableCards) {
        return this.pairTripQuadHelper(tableCards, 3, 40000);
    }
 
    // Parameter: tableCards array for 5 cards on the board
    // Purpose: check if flush is possible, set playerHand to be best possible 
    //          flush and return handValue. Return 0 if no flush
    // Return: handValue or 0
    checkFlush(tableCards) {
        //concatenate the 5 cards on board with the player's 2 cards
        let temp = this.concatenator(tableCards);
        //check that the 7 cards contains a flush
        let flushSuite = this.checkSuite(temp);
        if (flushSuite != "false") {
            //remove any cards that are not the flush suite
            temp = this.removeNonFlush(temp, flushSuite);
            //sort cards from high to low based on card number
            temp.sort((a, b) => (a.getNum() < b.getNum()) ? 1 : -1);
            //make and store the player's hand of best 5 cards
            this.updatePlayerHand(temp);
            //set and return #handValue
            this.#handValue = 60000;
            for (let i = 0; i < 5; i++) {
                this.#handValue += temp[i].getNum();
            }
            return this.#handValue;
        } else {
            return 0; //no flush
        }
    }

    // Parameter: tableCards array for 5 cards on the board
    // Purpose: check for full house, make playerHand if found and find handValue
    // Return handValue
    fullHouseCheck(tableCards) {
        // concatenate 5 card board with player's 2 cards
        let temp = this.concatenator(tableCards);
        //
        let fHVal = this.fHCount(temp);
        if (fHVal != 0) {

        }
    }

    // Parameter: tableCards array for 5 cards on the board
    // Purpose: check for quads, make playerHand if found and find handValue
    // Return: handValue
    checkQuads(tableCards) {
        return this.pairTripQuadHelper(tableCards, 4, 80000);
    }

    /**************** Additional Helpers ****************/

    // return concatenated array of 7 cards (player's 2 + table's 5)
    concatenator(tableCards) {
        let temp = this.#playerHand.concat(tableCards);
        return temp;
    }

    // Parameter: temp array
    // Purpose: check which suite, if any, appears 5 or more times
    // Return: name of sutie with 5 or more appearances, or "false" if none does
    checkSuite(temp) {
        let heartCount = 0;
        let diamondCount = 0;
        let spadeCount = 0;
        let clubCount = 0;
        for (let i = 0; i < 7; i++) {
            if (temp[i].getSuite() == "Heart") {
                heartCount++;
            } else if (temp[i].getSuite() == "Diamond") {
                diamondCount++;
            } else if (temp[i].getSuite() == "Spade") {
                spadeCount++;
            } else if (temp[i].getSuite() == "Club") {
                clubCount++;
            }
        }
        if (heartCount >= 5) {
            return "Heart";
        } else if (diamondCount >= 5) {
            return "Diamond";
        } else if (spadeCount >= 5) {
            return "Spade";
        } else if (clubCount >= 5) {
            return "Club";
        } else {
            return "false";
        }
    }

    // Parameters: temp array, suite that makes flush
    // Purpose: removes any nonrelevant suites
    // Return: updated temp with all of the same suite
    removeNonFlush(temp, flushSuite) {
        //dynamically set upper bound bc array size is changing by splicing
        for (let i = 0; i < temp.length; i++) {
            if (temp[i].getSuite() != flushSuite) {
                temp.splice(i, 1);
                i--; //as array shrinks, decreases idx so must accommodate
            }
        }
        return temp;
    }

    // Parameter: temp array
    // Purpose: push first (highest) 5 cards from temp into #playerHand
    // Return: none
    updatePlayerHand(temp) {
        //empty initial two cards
        this.#playerHand.splice(0, this.#playerHand.length);
        //fill with best 5 card hand
        for (let i = 0; i < 5; i++) {
            this.#playerHand.push(temp[i]);
        }
    }

    // Parameter: temp array
    // Purpose: check if a full house exists and make FH value
    // Return: full house value or 0 if no FH
    // NOT TESTED YET
    fHCount(temp) {
        let cardCount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (let i = 0; i < 7; i++) {
            cardCount[temp[i].getNum() - 2]++;
        }
        // count the number of trips and pair in the 7 cards
        let tripsCount = 0;
        let pairCount = 0;
        let fHVal = 0;
        for (let i = 12; i >= 0; i--) {
            if (cardCount[i] == 3 && tripsCount == 0) {
                tripsCount++;
                fHVal = (i + 2) * 100;
            } else if ((cardCount[i] == 2 || cardCount[i] == 3) && pairCount == 0) {
                pairCount++;
                fHVal += i + 2;
            }
            // return from for loop if FH found
            if (tripsCount == 1 && pairCount == 1) {
                return fHVal;
            }
        }
        return 0;
    }

    // Paramter: temp array
    // Purpose: check for two pair and make twoPairVal
    // Return: twoPairVal
    // NOT TESTED
    twoPairCount(temp) {
        let cardCount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (let i = 0; i < 7; i++) {
            cardCount[temp[i].getNum() - 2]++;
        }
        // count the number of pairs
        let pairCount = 0;
        let twoPairVal = 0;
        for (let i = 12; i >= 0; i--) {
            if (cardCount[i] == 2) {
                pairCount++;
                if (pairCount == 1) {
                    twoPairVal = 100 * (i + 2);
                } else if (pairCount == 2) {
                    twoPairVal += i + 2;
                }
            }
            if (pairCount == 2) {
                return twoPairVal;
            }
        }
        return 0;
    }

    // Paramter: temp array and count variable (for one pair (2), trips (3), quads (4))
    // Purpose: count the occurances of card number that appears in temp and find the 
    //          card number that matches count
    // Return: return the found card num or 0 if not found
    cardCounter(temp, count) {
        let cardCount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (let i = 0; i < 7; i++) {
            cardCount[temp[i].getNum() - 2]++;
        }
        for (let i = 12; i >= 0; i--) {
            if (cardCount[i] == count) {
                return i + 2;
            }
        }
        return 0;
    }

    // Parameter: temp and val, int for card number that occurs multiple times
    // Purpose: sorting for one pair, trips, quads by storing the multi occurance 
    //          card numbers in front then sorting the rest
    // Return: the specially sorted array of 7 cards
    yangSort(temp, val, numMultiple) {
        temp.sort((a, b) => (a.getNum() < b.getNum()) ? 1 : -1); //tested and works

        // bug free as of now
        let tempLength = temp.length;
        for (let i = 0; i < tempLength; i++) {
            if (temp[i].getNum() == val) {
                let found = [];
                for (let j = i; j < numMultiple + i; j++) {
                    found.push(temp[j]);
                }
                for (let h = i; h > 0; h--) {
                    temp[h + numMultiple - 1] = temp[h - 1];
                }
                for (let k = 0; k < numMultiple; k++) {
                    temp[k] = found[k];
                }
                return temp;
            }
        }
    }

    // Parameter: tableCards array for cards on the board and numMultiple which 
    //            can be 2 for pair, 3 for trips, 4 for quad
    // Purpose: helper function for checkPair, checkTrips, and checkQuads
    // Return: handValue
    pairTripQuadHelper(tableCards, numMultiple, starthandVal) {
        //concatenate the 5 cards on board with the player's 2 cards
        let temp = this.concatenator(tableCards);
        let val = this.cardCounter(temp, numMultiple);
        if (val != 0) {
            //store the found pair/trip/quad in front then sort subsequent 5 cards
            temp = this.yangSort(temp, val, numMultiple);
            //make and store the palyer's hand of best 5 cards
            this.updatePlayerHand(temp);
            //set and return #handValue
            this.#handValue = starthandVal;
            for (let i = 0; i < 5; i++) {
                if (i < numMultiple) {
                    this.#handValue += temp[i].getNum() * 10
                } else {
                    this.#handValue += temp[i].getNum();
                }
            }
            return this.#handValue;
        } else {
            return 0;
        }
    }
}

// Export 
module.exports = Player;