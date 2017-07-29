function attachEvents() {
    const serviceUrl = 'https://baas.kinvey.com/appdata/kid_r13cLwD8-';
    const base64auth = btoa('guest:guest');
    const authHeaders = {Authorization: 'Basic ' + base64auth};

    $('#btnLoadPosts').click(loadPosts);
    $('#btnViewPost').click(viewPost);


    function loadPosts() {
        $.ajax({
            method: 'GET',
            url: serviceUrl + '/posts',
            headers: authHeaders,
            success: appendPosts,
            error: displayError
        });
    }

    function appendPosts(posts) {
        let dropdown = $('#posts');
        for (let post of posts) {
            dropdown.append($(`<option value="${post._id}">${post.title}</option>`));
        }
    }

    function displayError(error) {
        console.log(error);
    }
    
    function viewPost() {
        let postId = $('option:selected').val();
        $.ajax({
            url: serviceUrl + '/posts/' + postId,
            headers: authHeaders,
            success: displayPost
        });
    }

    function displayPost(post) {
        $('#post-title').text(post.title);
        $('#post-body').text(post.body);
        $.ajax({
            url: serviceUrl + `/comments/?query={"post_id":"${post._id}"}`,
            headers: authHeaders,
            success: displayComments
        });

        function displayComments(dataComments) {
            let comments = $('#post-comments');
            for (let comment of dataComments) {
                comments.append($('<li>').text(comment.text));
            }
        }
    }
}