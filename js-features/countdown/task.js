const timerElement = document.getElementById('timer');

function formatTime(totalSeconds) {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    const formatNumber = (num) => num.toString().padStart(2, '0');
    
    return `${formatNumber(hours)}:${formatNumber(minutes)}:${formatNumber(seconds)}`;
}

let timeLeft = parseInt(timerElement.textContent);

function updateTimer() {
    if (timeLeft > 0) {
        timeLeft--;
        timerElement.textContent = formatTime(timeLeft);
    } else {
        clearInterval(timerInterval);
        alert('Вы победили в конкурсе!');
    }
}

const timerInterval = setInterval(updateTimer, 1000);

timerElement.textContent = formatTime(timeLeft);
