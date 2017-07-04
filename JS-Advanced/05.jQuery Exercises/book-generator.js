function createBook(selector, title, author, ISBN) {
    let bookGenerator = (function () {
        let id = 1;

        return function (selector, title, author, ISBN) {
            let mainDiv = $(selector);
            let div = $('<div>');
            div.attr('id', `book${id}`);

            let titlePara = $('<p>');
            titlePara.addClass('title');
            titlePara.text(title);

            let authorPara = $('<p>');
            authorPara.addClass('author');
            authorPara.text(author);

            let isbnPara = $('<p>');
            isbnPara.addClass('isbn');
            isbnPara.text(ISBN);

            let selectBtn = $('<button>');
            selectBtn.text('Select');

            let deselectBtn = $('<button>');
            deselectBtn.text('Deselect');

            div.append(titlePara,authorPara,isbnPara,selectBtn,deselectBtn);
            mainDiv.append(div);
            selectBtn.on('click', function () {
               div.css('border', '2px solid blue');
            });

            deselectBtn.on('click', function () {
                div.css('border', 'none');
            });

            ++id;
        }
    }());

    bookGenerator(selector, title, author, ISBN);
}
