function attachEvents() {
    $('#btnLoad').click(loadContacts);
    $('#btnCreate').click(createContact);
    let phonebook = $('#phonebook');

    function loadContacts() {
        phonebook.empty();
        $.ajax({
            url: 'https://phonebook-nakov.firebaseio.com/phonebook.json',
            success: displayContacts,
        });
    }

    function displayContacts(data) {
        for (let contact in data) {
            phonebook.append($(`<li>${data[contact].person}: ${data[contact].phone}</li>`)
                .append($(`<button>[Delete]</button>`)
                    .click(() => deleteContact(contact))));
        }
    }

    function deleteContact(contact) {
        $.ajax({
            method: 'DELETE',
            url: `https://phonebook-nakov.firebaseio.com/phonebook/${contact}.json`,
            success: loadContacts
        });
    }

    function createContact() {
        let data = {
            person: $('#person').val(),
            phone: $('#phone').val()
        };

        $.ajax({
            method: 'POST',
            data: JSON.stringify(data),
            url: 'https://phonebook-nakov.firebaseio.com/phonebook.json',
            success: loadContacts
        });

        $('#person').val('');
        $('#phone').val('');
    }
}