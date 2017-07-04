function increment(selector) {
    let div = $(selector);
    let textArea = $('<textarea>');
    textArea.addClass('counter');
    textArea.attr('disabled', 'disabled');
    textArea.val(0);
    let incrementBtn = $('<button>');
    incrementBtn.addClass('btn');
    incrementBtn.attr('id','incrementBtn');
    incrementBtn.text('Increment');
    let addBtn = $('<button>');
    addBtn.addClass('btn');
    addBtn.attr('id', 'addBtn');
    addBtn.text('Add');
    let list = $('<ul>');
    list.addClass('results');
    div.append(textArea, incrementBtn, addBtn, list);
    
    incrementBtn.on('click', function () {
        textArea.val(+textArea.val() + 1);
    });

    addBtn.on('click', function () {
       let li = $('<li>').text(textArea.val());
       list.append(li);
    });
}