function extract(elementId) {
    let text = document.getElementById(elementId).textContent;
    let pattern = /\((.*?)\)/;
    let match = pattern.exec(text);
    let result = [];
    while (match) {
        result.push(match[1]);
        match = pattern.exec(text);
    }

    return result;
}