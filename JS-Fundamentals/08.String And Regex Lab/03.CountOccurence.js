function count(word, text) {
    let count = 0;
    let index = -1;

    while (true) {
        index = text.indexOf(word,index);
        if (index !== -1) {
            count++;
            index++;
        } else {
            break;
        }
    }

    console.log(count);
}

count('ma', 'Marine mammal training is the training and caring for marine life such as, dolphins, killer whales, sea lions, walruses, and other marine mammals. It is also a duty of the trainer to do mental and physical exercises to keep the animal healthy and happy.');
