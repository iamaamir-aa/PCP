document.getElementById("timeRemaining").textContent = "Hello";
var d = new Date();
var year = d.getFullYear();
var isLeap = isLeapYear(year);
var numOfDays = isLeap ? 366 : 365;
var firstDayOfYear = new Date(year, 0, 1, 0, 0, 0);
var totalSeconds = numOfDays * 24 * 60 * 60;
var percentPerSec = 100 / (totalSeconds);
function updatePercentages() {
    var secondsPassed = (Date.now() - firstDayOfYear.getTime()) / 1000;
    var remainingTime = totalSeconds - secondsPassed;
    var percentPassed = secondsPassed * percentPerSec;
    var percentRemaining = remainingTime * percentPerSec;
    document.getElementById("timeRemaining").textContent = String(percentRemaining);
    document.getElementById("timePassed").textContent = String(percentPassed);
}
var updateInterval = setInterval(updatePercentages, 1000);
function isLeapYear(year) {
    if (year % 400 === 0) {
        return true;
    }
    else if (year % 100 === 0) {
        return false;
    }
    else if (year % 4 == 0) {
        return true;
    }
    else {
        return false;
    }
}
