// const targetDate = '18 Nov 2022';

const targetDate = '2022-11-17 23:59:59';
const iPhoneDate = convertDateForIos(targetDate)

const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minsEl = document.getElementById('mins')
const secondsEl = document.getElementById('seconds')


function countdown() {
    const newDate = new Date(iPhoneDate);
    let currentDate = new Date();

    return(Math.abs(newDate - currentDate));
}

function converter() {
    let mils = countdown();
    let times = [];

    let days = mils / 86400400;
    let daysFloor = Math.floor(days);
    times.push(daysFloor);

    let hours = (days-daysFloor) * 24;
    let hoursFloor = Math.floor(hours);
    times.push(hoursFloor);

    let minutes = (hours - hoursFloor) * 60;
    let minutesFloor = Math.floor(minutes);
    times.push(minutesFloor);

    let seconds = (minutes - minutesFloor) * 60;
    let secondsFloor = Math.floor(seconds);
    times.push(secondsFloor);

    daysEl.innerHTML = formatTime(times[0]);
    hoursEl.innerHTML = formatTime(times[1]);
    minsEl.innerHTML = formatTime(times[2]);
    secondsEl.innerHTML = formatTime(times[3]);
}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}

setInterval(converter, 1000);

// let timeLeft = converter(millis)

// document.getElementById("days").textContent = timeLeft[0];
// document.getElementById("hours").textContent = timeLeft[1];
// document.getElementById("mins").textContent = timeLeft[2];
// document.getElementById("seconds").textContent = timeLeft[3];

function convertDateForIos(date) {
    const arr = date.split(/[- :]/);
    date = new Date(arr[0], arr[1]-1, arr[2], arr[3], arr[4], arr[5]);
    return date;
}