function attachGradientEvents() {
    document.getElementById('gradient').addEventListener('mousemove', (event) => {
        let power = event.offsetX / (event.target.clientWidth - 1);
        power = Math.trunc(power * 100);
        document.getElementById('result').textContent = power + '%';
    });

    document.getElementById('gradient').addEventListener('mouseout', (event) => {
        document.getElementById('result').textContent = '';
    });
}