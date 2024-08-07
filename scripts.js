if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, function(error) {
            console.log('ServiceWorker registration failed: ', error);
        });
    });
}

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

    const data = {
        blueCircleColor: blueColor,
        pinkCircleColor: pinkColor,
        startDate: startDate,
        endDate: endDate,
        topBoxTimeStart: startTime,
        topBoxTimeEnd: endTime,
        bottomBoxDate: bottomBoxDate,
        bottomBoxTime: bottomBoxTime
    };

    // Save input values as JSON to local storage
    localStorage.setItem('userData', JSON.stringify(data));

    updateUI(data); // Update the UI with the new values
}

document.addEventListener('DOMContentLoaded', function() {
    startTimer();
    loadSavedInputValues();
});

function loadSavedInputValues() {
    const savedData = localStorage.getItem('userData');
    if (savedData) {
        const data = JSON.parse(savedData);

        document.getElementById('blue-circle-color').value = data.blueCircleColor;
        document.getElementById('pink-circle-color').value = data.pinkCircleColor;
        document.getElementById('start-date').value = data.startDate;
        document.getElementById('end-date').value = data.endDate;
        document.getElementById('top-box-time-start').value = data.topBoxTimeStart;
        document.getElementById('top-box-time-end').value = data.topBoxTimeEnd;
        document.getElementById('bottom-box-date').value = data.bottomBoxDate;
        document.getElementById('bottom-box-time').value = data.bottomBoxTime;

        updateUI(data); // Update the UI with the saved values
    }
}

function updateUI(data) {
    // Update circle colors
    document.querySelector('.blue').style.backgroundColor = data.blueCircleColor;
    document.querySelector('.pink').style.backgroundColor = data.pinkCircleColor;

    // Update date parts
    document.querySelector('.date-part').textContent = data.startDate;
    document.querySelector('.date-part2').textContent = data.endDate;

    // Update time in top box
    document.querySelector('.start-time').textContent = data.topBoxTimeStart;
    document.querySelector('.end-time').textContent = data.topBoxTimeEnd;

    // Update bottom box date and time
    document.getElementById('bottom-box-date-text').textContent = data.bottomBoxDate;
    document.getElementById('bottom-box-time-text').textContent = data.bottomBoxTime;
}

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

function displayErrorMessage(message) {
    const container = document.querySelector('.iphone-container');
    let errorMessageElement = document.getElementById('fullscreen-error-message');

    if (!errorMessageElement) {
        errorMessageElement = document.createElement('div');
        errorMessageElement.id = 'fullscreen-error-message';
        errorMessageElement.style.position = 'absolute';
        errorMessageElement.style.top = '50%';
        errorMessageElement.style.left = '50%';
        errorMessageElement.style.transform = 'translate(-50%, -50%)';
        errorMessageElement.style.backgroundColor = 'rgba(255, 0, 0, 0.8)';
        errorMessageElement.style.color = '#fff';
        errorMessageElement.style.padding = '10px';
        errorMessageElement.style.borderRadius = '5px';
        errorMessageElement.style.zIndex = '1000';
        container.appendChild(errorMessageElement);
    }

    errorMessageElement.textContent = message;
}

function simulateFullscreen(element) {
    element.classList.add('fullscreen-simulated');
}

function exitSimulatedFullscreen(element) {
    element.classList.remove('fullscreen-simulated');
}

function requestFullscreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen().catch(err => {
            displayErrorMessage(`Error: ${err.message} (${err.name})`);
        });
    } else if (element.webkitRequestFullscreen) { /* Safari */
        element.webkitRequestFullscreen().catch(err => {
            displayErrorMessage(`Error: ${err.message} (${err.name})`);
        });
    } else if (element.msRequestFullscreen) { /* IE11 */
        element.msRequestFullscreen().catch(err => {
            displayErrorMessage(`Error: ${err.message} (${err.name})`);
        });
    } else {
        simulateFullscreen(element);
    }
}

function exitFullscreen(element) {
    if (document.exitFullscreen) {
        document.exitFullscreen().catch(err => {
            displayErrorMessage(`Error: ${err.message} (${err.name})`);
        });
    } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen().catch(err => {
            displayErrorMessage(`Error: ${err.message} (${err.name})`);
        });
    } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen().catch(err => {
            displayErrorMessage(`Error: ${err.message} (${err.name})`);
        });
    } else {
        exitSimulatedFullscreen(element);
    }
}

document.getElementById('fullscreen-btn').addEventListener('click', function() {
    var container = document.querySelector('.iphone-container');
    if (!document.fullscreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
        requestFullscreen(container);
    } else {
        exitFullscreen(container);
    }
});

document.addEventListener('fullscreenchange', function() {
    console.log('Fullscreen mode changed.');
});

document.addEventListener('webkitfullscreenchange', function() {
    console.log('Fullscreen mode changed.');
});

document.addEventListener('msfullscreenchange', function() {
    console.log('Fullscreen mode changed.');
});

document.addEventListener('fullscreenerror', function(event) {
    displayErrorMessage('An error occurred while trying to change fullscreen mode.');
});

document.addEventListener('webkitfullscreenerror', function(event) {
    displayErrorMessage('An error occurred while trying to change fullscreen mode.');
});

document.addEventListener('msfullscreenerror', function(event) {
    displayErrorMessage('An error occurred while trying to change fullscreen mode.');
});
