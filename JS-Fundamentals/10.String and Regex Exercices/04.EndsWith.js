function main(str, substr) {
    if (str.endsWith(substr))
        console.log(true);
    else
        console.log(false);
}

main('This sentence ends with fun?', 'fun?');

main('This is Houston, we have…', 'We have…');