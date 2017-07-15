let result = (function(){
    let Suits = {
        SPADES: "\u2660 ",
        HEARTS: "\u2665",
        DIAMONDS: "\u2666",
        CLUBS: "\u2663"
    };

    let validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    class Card {
        constructor(face, suit) {
            this.face = face;
            this.suit = suit;
        }

        get face() {
            return this._face;
        }

        set face(face) {
            if (!validFaces.includes(face))
                throw new Error("Invalid card face: " + face);
            this._face = face;
        }

        get suit() {
            return this._suit;
        }

        set suit(suit) {
            console.log(suit);
            if (suit === undefined)
                throw new Error("Invalid card suit: " + suit);
            this._suit = suit;
        }

        toString() {
            return this.face + this.suit;
        }
    }

    return {
        Suits:Suits,
        Card:Card
    }
}());

let Card = result.Card;
let Suits = result.Suits;
let c1 = new Card('Q', Suits.Kur);
//c1.face = "A";
//c1.suit = "DIAMONDS";
console.log(c1.toString());