let timer;
let isRunning = false;
let hours = 0;
let minutes = 0;
let seconds = 0;
let lapCounter = 1;

function startStop() {
    if (isRunning) {
        clearInterval(timer);
        document.getElementById('startStopBtn').innerText = 'Start';
    } else {
        timer = setInterval(updateTime, 1000);
        document.getElementById('startStopBtn').innerText = 'Stop';
    }
    isRunning = !isRunning;
}

function updateTime() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }
    document.getElementById('display').innerText = 
        (hours < 10 ? "0" + hours : hours) + ":" +
        (minutes < 10 ? "0" + minutes : minutes) + ":" +
        (seconds < 10 ? "0" + seconds : seconds);
}

function reset() {
    clearInterval(timer);
    isRunning = false;
    hours = 0;
    minutes = 0;
    seconds = 0;
    lapCounter = 1;
    document.getElementById('display').innerText = "00:00:00";
    document.getElementById('startStopBtn').innerText = 'Start';
    document.getElementById('laps').innerHTML = '';
}

function lap() {
    if (isRunning) {
        const lapTime = document.getElementById('display').innerText;
        const lapItem = document.createElement('li');
        lapItem.innerText = `Lap ${lapCounter}: ${lapTime}`;
        document.getElementById('laps').appendChild(lapItem);
        lapCounter++;
    }
}

function toggleTheme() {
    document.body.classList.toggle('dark');
    document.body.classList.toggle('light');
}

// Initialize with light theme
document.body.classList.add('light');