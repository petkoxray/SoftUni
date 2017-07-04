function extractText() {
    let text = $('#items li').toArray().map(li => li = li.textContent);
    $('#result').text(text.join(', '));
}