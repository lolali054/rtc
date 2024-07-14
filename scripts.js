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
// Function to request fullscreen
function requestFullscreen(element) {
    console.log('Requesting fullscreen...');
    if (element.requestFullscreen) {
        element.requestFullscreen().catch(err => console.error('Error attempting to enable full-screen mode:', err));
    } else if (element.webkitRequestFullscreen) { /* Safari */
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) { /* IE11 */
        element.msRequestFullscreen();
    } else if (element.mozRequestFullScreen) { /* Firefox */
        element.mozRequestFullScreen();
    } else {
        console.error('Fullscreen API is not supported.');
    }
}

// Function to exit fullscreen
function requestFullscreen(element) {
    console.log('Requesting fullscreen...');
    if (element.requestFullscreen) {
        element.requestFullscreen().catch(err => console.error('Error attempting to enable full-screen mode:', err));
    } else if (element.webkitRequestFullscreen) { /* Safari */
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) { /* IE11 */
        element.msRequestFullscreen();
    } else if (element.mozRequestFullScreen) { /* Firefox */
        element.mozRequestFullScreen();
    } else {
        console.error('Fullscreen API is not supported.');
    }
}

// Function to exit fullscreen
function exitFullscreen() {
    console.log('Exiting fullscreen...');
    if (document.exitFullscreen) {
        document.exitFullscreen().catch(err => console.error('Error attempting to exit full-screen mode:', err));
    } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) { /* Firefox */
        document.mozCancelFullScreen();
    } else {
        console.error('Fullscreen API is not supported.');
    }
}

// Event listener for full-screen button
document.getElementById('fullscreen-btn').addEventListener('click', function() {
    var container = document.querySelector('.iphone-container');
    if (!document.fullscreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement && !document.mozFullScreenElement) {
        requestFullscreen(container); // Go fullscreen
    } else {
        exitFullscreen(); // Exit fullscreen
    }
});

// Ensure fullscreen changes are handled correctly
document.addEventListener('fullscreenchange', onFullscreenChange);
document.addEventListener('webkitfullscreenchange', onFullscreenChange);
document.addEventListener('mozfullscreenchange', onFullscreenChange);
document.addEventListener('MSFullscreenChange', onFullscreenChange);

function onFullscreenChange() {
    var fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;
    if (fullscreenElement) {
        console.log('Entered fullscreen mode');
    } else {
        console.log('Exited fullscreen mode');
    }
}

