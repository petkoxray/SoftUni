function main([text, sentences]) {
    let slittedWords = text.split(/\W+/).filter(w => w !== '').map(w => w.toLowerCase());
    let words = {};

    for (let word of slittedWords) {
        if (!words[word])
            words[word] = 0;
        words[word]++;
    }

    let filltredWords = [];

    for (let word in words) {
        if (words[word] >= 3)
            filltredWords.push(word)
    }

    if (filltredWords.length <= 1) {
        console.log('No words');
        return;
    }

    let matches = sentences.match(/.*?(\.|\?|!)/g).map(s => s.trim());
    let splittedSentnces = sentences.split(/\.|\?|\!/).map(s => s.trim().toLowerCase()).filter(s => s !== '');

    let isMatch = false;

    for (let i = 0; i < splittedSentnces.length; i++) {
        let count = 0;
        for (let j = 0; j < filltredWords.length; j++) {
            let regex = new RegExp(filltredWords[j], "g");
            let match = regex.exec(splittedSentnces[i]);
            while (match) {
                count++;
                match = regex.exec(splittedSentnces[i]);
            }
        }

        if (count >= 2) {
            console.log(matches[i]);
            isMatch = true;
        }
    }

    if (!isMatch) {
        console.log("No sentences");
    }

}

main(["Captain Obvious was walking down the street. As the captain was walking a person came and told him: You are Captain Obvious! He replied: Thank you CAPTAIN OBVIOUS you are the man!",
    "The captain was walking and he was obvious. He did not know what was going to happen to you in the future. Was he curious? We do not know."]
);

main(["Why, why is he so crazy, so so crazy? Why?",
    "There are no words that you should be matching. You should be careful."]
);