function loadRepos() {
    $('#repos').empty();
    let username = $('#username').val();
    let url = `https://api.github.com/users/${username}/repos`;
    return $.ajax({
        url: url,
        success: displayRepos,
        error: displayError
    });

    function displayRepos(repos) {
        for (let repo of repos) {
            $('#repos').append($('<li>')
                .append($(`<a href="${repo.html_url}">${repo.full_name}</a>`)))
        }
    }

    function displayError() {
        $('#repos').append($('<li>').text('Error'));
    }
}