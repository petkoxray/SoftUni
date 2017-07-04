function attachEvents() {
    $('#items li').click(toggleTowns);

    $('#showTownsButton').click(function () {
       let result = $('#items li[data-selected=true]')
           .toArray()
           .map(li => li = li.textContent)
           .join(', ');
       $('#selectedTowns').text(result);
    });

    function toggleTowns() {
        let li = $(this);
        if (li.attr('data-selected')) {
            li.removeAttr('data-selected');
            li.css('background-color', '');
        } else {
            li.attr('data-selected', 'true');
            li.css('background-color', '#DDD');
        }
    }
}