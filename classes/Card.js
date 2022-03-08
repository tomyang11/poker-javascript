
class Card {
    
/**************** Member Variables ****************/
        
    // Apparently is JS there's no public/private but use '#' to indicate private
    #num;
    #suite;
    #drawn;

/**************** Constructor ****************/

    constructor(num, suite) {
        this.#num = num;
        this.#suite = suite;
        this.#drawn = false;
    }

/**************** Getters ****************/

    // Returns bool representing whether or not card has been drawn
    isDrawn() {
        return this.#drawn;
    }
    getNum() {
        return this.#num;
    }
    getSuite() {
        return this.#suite;
    }


/**************** Setters ****************/

    // pass in bool representing whether card is drawn or not
    setDrawn(isDrawn) {
        this.#drawn = isDrawn;
    }   

}

// Export 

module.exports = Card;
