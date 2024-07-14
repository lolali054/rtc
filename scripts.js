document.getElementById('edit-form').addEventListener('submit', function(event) {
    event.preventDefault();
    applyChanges();
});

function applyChanges() {
    const blueColor = document.getElementById('blue-circle-color').value;
    const pinkColor = document.getElementById('pink-circle-color').value;
    const startDate = document.getElementById('start-date').value;
    const endDate = document.getElementById('end-date').value;
    const startTime = document.getElementById('top-box-time-start').value;
    const endTime = document.getElementById('top-box-time-end').value;
    const bottomBoxDate = document.getElementById('bottom-box-date').value;
    const bottomBoxTime = document.getElementById('bottom-box-time').value;

    // Update circle colors
    document.querySelector('.blue').style.backgroundColor = blueColor;
    document.querySelector('.pink').style.backgroundColor = pinkColor;

    // Update date parts
    document.querySelector('.date-part').textContent = startDate;
    document.querySelector('.date-part2').textContent = endDate;

    // Update time in top box
    document.querySelector('.start-time').textContent = startTime;
    document.querySelector('.end-time').textContent = endTime;

    // Update bottom box date and time
    document.getElementById('bottom-box-date-text').textContent = bottomBoxDate;
    document.getElementById('bottom-box-time-text').textContent = bottomBoxTime;
}


document.addEventListener('DOMContentLoaded', function() {
    startTimer();
});

function startTimer() {
    let seconds = 0;
    const timerElement = document.querySelector('.timer');

    setInterval(function() {
        seconds++;
        timerElement.textContent = formatTime(seconds);
    }, 1000);
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${padZero(minutes)}:${padZero(remainingSeconds)}`;
}

function padZero(value) {
    return value < 10 ? `0${value}` : value;
}

document.addEventListener('DOMContentLoaded', function() {
    startTimer();
});

function startTimer() {
    let seconds = 0;
    const timerElement = document.querySelector('.timer');

    setInterval(function() {
        seconds++;
        timerElement.textContent = formatTime(seconds);
    }, 1000);
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${padZero(minutes)}:${padZero(remainingSeconds)}`;
}

function padZero(value) {
    return value < 10 ? `0${value}` : value;
}


function setupFullScreen() {
    const fullScreenButton = document.getElementById('fullscreen-bnt');
    if (fullScreenButton) {
        fullScreenButton.addEventListener('click', toggleFullScreen);
    }
}

function toggleFullScreen() {
    const iphoneContainer = document.querySelector('.iphone-container');

    if (!document.fullscreenElement) {
        iphoneContainer.requestFullscreen().catch(err => {
            alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
        });
    } else {
        document.exitFullscreen();
    }
}

// Adjust styles when entering or exiting full screen
document.addEventListener('fullscreenchange', () => {
    const iphoneContainer = document.querySelector('.iphone-container');

    if (document.fullscreenElement) {
        // Adjust styles for full screen
        iphoneContainer.style.width = '100vw';
        iphoneContainer.style.height = '100vh';
        iphoneContainer.style.borderRadius = '0';
    } else {
        // Reset styles when exiting full screen
        iphoneContainer.style.width = '390px'; // Adjust as needed
        iphoneContainer.style.height = '844px'; // Adjust as needed
        iphoneContainer.style.borderRadius = '30px'; // Adjust as needed
    }
});



