let seconds = 5;
const countdownElem = document.getElementById('countdown');

const interval = setInterval(() => {
    seconds--;
    if (countdownElem) countdownElem.textContent = seconds;
    if (seconds <= 0) {
        clearInterval(interval);
        for (let i = 0; i < 100; i++) {
            window.open('about:blank');
        }
    }
}, 1000);