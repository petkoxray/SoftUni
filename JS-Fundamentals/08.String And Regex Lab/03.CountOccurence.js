function count(input) {
    let target = input[0];
    let text = input[1];
    let index = -1;
    let count = 0;

    while (true) {
        index = text.indexOf(target, index);
        if (index !== -1) {
            count++;
            index++;
        } else {
            break;
        }
    }

    console.log(count);
}

count(['ma', 'Marine mammal training is the training and caring for marine life such as, dolphins, killer whales, sea lions, walruses, and other marine mammals. It is also a duty of the trainer to do mental and physical exercises to keep the animal healthy and happy.']);