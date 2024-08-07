document.addEventListener('DOMContentLoaded', function() {
    const alarm = document.getElementById('alarm');
    const btn5min = document.getElementById('5min');
    const btn15min = document.getElementById('15min');
    const btn30min = document.getElementById('30min');
    const timeDisplay = document.getElementById('time-display');
    
    let intervalId;
    let currentInterval = 300000; // Default 5 minutes

    function remindPosture() {
        //alarm.play();
    }

    function setReminderInterval(interval, displayText) {
        clearInterval(intervalId);
        intervalId = setInterval(remindPosture, interval);
        timeDisplay.textContent = displayText;
        remindPosture();
    }

    btn5min.addEventListener('click', function() {
        currentInterval = 300000; // 5 minutes
        setReminderInterval(currentInterval);
        setReminderInterval(currentInterval, '5 minutes');
    });

    btn15min.addEventListener('click', function() {
        currentInterval = 900000; // 15 minutes
        setReminderInterval(currentInterval);
        setReminderInterval(currentInterval, '15 minutes');
    });

    btn30min.addEventListener('click', function() {
        currentInterval = 1800000; // 30 minutes
        setReminderInterval(currentInterval);
        setReminderInterval(currentInterval, '30 minutes');
    });

    // Set initial interval
    setReminderInterval(currentInterval, '5 minutes');
});
