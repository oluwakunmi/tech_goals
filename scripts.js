function updateTimeAndDay() {
    const currentTimeUTC = document.getElementById('currentTimeUTC');
    const currentDay = document.getElementById('currentDay');

    const now = new Date();
    const utcTime = now.toUTCString().split(' ')[4]; 
    const dayOfWeek = now.toLocaleDateString('en-US', { weekday: 'long' });

    currentTimeUTC.innerText = `CurrentTimeUTC: ${utcTime}`;
    currentDay.innerText = `CurrentDay: ${dayOfWeek}`;
}

/bin/bash: wq: command not found
