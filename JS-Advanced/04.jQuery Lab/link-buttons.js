function attachEvents() {
    $('.button').click(selectBtn);

    function selectBtn() {
        $('.button').removeClass('selected');
        $(this).addClass('selected');
    }
}