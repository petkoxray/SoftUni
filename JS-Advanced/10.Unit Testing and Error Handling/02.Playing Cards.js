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