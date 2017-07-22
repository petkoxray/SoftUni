function attachEvents() {
    let towns = $('#towns');
    $('#btnAdd').click(function () {
        let value = $('#newItem');
        if (value.val() !== '')
            towns.append($('<option>').text(value.val()));
        value.val('');
    });

    $('#btnDelete').click(function () {
        $(':selected').remove();
    });
}