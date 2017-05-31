function sort(input) {
    input.sort((el1, el2) => sortByLength(el1, el2)).forEach(el => console.log(el));

    function sortByLength(el1, el2) {
        return el1.length - el2.length ||
            el1.toLowerCase().localeCompare(el2.toLowerCase());
    }
}

sort(['test','Deny','omen','Default','a','ac','ab']);