function initializeTable() {
    let countries = $('#countriesTable');
    createCountry('Bulgaria', 'Sofia');
    createCountry('Germany', 'Berlin');
    createCountry('Russia', 'Moscow');
    hideLinks();

    $('#createLink').click(prepareInput);

    function createCountry(country, town) {
        let tr = $('<tr>');
        tr.append($(`<td>${country}</td>`));
        tr.append($(`<td>${town}</td>`));
        let action = $('<td>');
        action.append($('<a>').text('[Up] ').attr('href', '#').click(moveUp),
            $('<a>').text('[Down] ').attr('href', '#').click(moveDown),
            $('<a>').text('[Delete]').attr('href', '#').click(deleteCountry));
        tr.append(action);
        countries.append(tr);
        hideLinks();
    }

    function prepareInput() {
        createCountry($('#newCountryText').val(), $('#newCapitalText').val())
    }

    function deleteCountry() {
        let country = $(this).parent().parent();
        country.fadeOut(function () {
            country.remove();
            hideLinks();
        });
    }
    
    function moveUp() {
        let row = $(this).parent().parent();
        row.fadeOut(function () {
            row.insertBefore(row.prev());
            row.fadeIn();
            hideLinks();
        });
    }
    
    function moveDown() {
        let row = $(this).parent().parent();
        row.fadeOut(function () {
            row.insertAfter(row.next());
            row.fadeIn();
            hideLinks();
        });
    }

    function hideLinks() {
        let rows = $('#countriesTable tr');
        rows.find("a").css('display', 'inline-block');
        $(rows[2]).find("a:contains('Up')")
            .css('display', 'none');
        $(rows[rows.length - 1]).find("a:contains('Down')")
            .css('display', 'none');
    }
}