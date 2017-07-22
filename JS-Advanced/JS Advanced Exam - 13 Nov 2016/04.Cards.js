function cardDeckBuilder(selector) {
    let main = $(selector);
    let suits = new Map();
    suits.set('D','\u2666');
    suits.set('H', '\u2665');
    suits.set('C', '\u2663');
    suits.set('S', '\u2660');

    return {
        addCard: (face, suit) => {
            main.append($('<div>')
                .addClass('card')
                .text(`${face} ${suits.get(suit)}`)
                .click(function () {
                    main.children().each((i, div) => {main.prepend(div)});
                }));
        }
    }
}