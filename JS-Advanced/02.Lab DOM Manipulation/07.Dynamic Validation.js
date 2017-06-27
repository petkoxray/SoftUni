function validate() {
    let input = document.getElementById('email');
    let regex = /[a-z]+@[a-z]+\.[a-z]+/;
    input.addEventListener('change', (event) => {
        if (!regex.test(event.target.value))
            event.target.className = 'error';
        else
            event.target.removeAttribute('class');
    });
}