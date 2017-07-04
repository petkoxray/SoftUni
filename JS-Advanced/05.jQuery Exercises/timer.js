function timer() {
    let startBtn = $('#start-timer');
    let stopBtn = $('#stop-timer');
    let seconds = 0;
    let timer;
    let isStarted = false;

    startBtn.on('click', function () {
        if (!isStarted) {
            isStarted = true;
            timer = setInterval(tick, 1000);
        }
    });

    stopBtn.on('click', function () {
        if (isStarted) {
            isStarted = false;
            clearInterval(timer);
        }
    });

    function tick() {
        seconds++;
        $('#hours').text(('0' + Math.trunc(seconds / 60 / 60)).slice(-2));
        $('#minutes').text(('0' + Math.trunc(seconds / 60 % 60)).slice(-2));
        $('#seconds').text(('0' + seconds % 60).slice(-2));
    }
}