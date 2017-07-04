function search() {
    $('#towns li').css('font-weight', 'normal');
    let searchText = $('#searchText').val();
    let towns = $(`#towns li:contains(${searchText})`);
    towns.css('font-weight', 'bold');
    $('#result').text(`${towns.length} + matches found.`)
}