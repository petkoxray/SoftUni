function printDeckOfCards(cards) {
    function makeCard(face, suit) {
        let validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        let validSuits = ['S', 'H', 'D', 'C'];
        let suitToChar = {
            S: "\u2660 ",
            H: "\u2665",
            D: "\u2666",
            C: "\u2663"
        };

        if (validFaces.includes(face) && validSuits.includes(suit)) {
            let card = {
                face: face,
                suit: suit,
                toString: function () {
                    return card.face + suitToChar[suit];
                }
            };

            return card;
        } else {
            throw new Error('Error;')
        }
    }

    let result = [];
    for (let card of cards) {
        let suit = card.substr(card.length -1);
        let face = card.substr(0, card.length - 1);
        try {
            result.push(makeCard(face, suit));
        } catch(err) {
            return console.log('Invalid card: ' + card);
        }
    }

    console.log(result.join(', '));
}