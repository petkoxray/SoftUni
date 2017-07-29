function loadCommits() {
    let commits = $('#commits');
    //commits.empty();
    $.get(`https://api.github.com/repos/${$('#username').val()}/${$('#repo').val()}/commits`)
        .then((data) => {
            for (let commit in data) {
                let author = data[commit].commit.author.name;
                let message = data[commit].commit.message;
                commits.append($(`<li>${author}: ${message}</li>`))
            }
        })
        .catch((error) => {
            commits.append($(`<li>Error: ${error.status} (${error.statusText})</li>`))
        });
}