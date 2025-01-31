const INTERVAL_OF_ANIMATION = 1000 / 60

const timer = document.getElementById('timer')
const startButton = document.getElementById('start-button')
const stopButton = document.getElementById('stop-button')
const resetButton = document.getElementById('reset-button')

startButton.addEventListener('click', startTimer)
stopButton.addEventListener('click', stopTimer)
resetButton.addEventListener('click', resetTimer)

let timerID
let previousStartTime = 0
let currentTimer = 0

function startTimer() {
    startButton.disabled = true
    stopButton.disabled = false
    resetButton.disabled = true

    previousStartTime = Date.now()

    // timerID = setInerval(updateTimer, INTERVAL_OF_ANIMATION)
    timerID = requestAnimationFrame(updateTimer)
}

function stopTimer() {
    startButton.disabled = false
    stopButton.disabled = true
    resetButton.disabled = false

    currentTimer += Date.now() - previousStartTime;

    // clearInterval(timerID)
    cancelAnimationFrame(timerID)
}

function resetTimer() {
    resetButton.disabled = true
    timer.textContent = '00:00:000'
    currentTimer = 0
}

function updateTimer() {
    const millisecond = Date.now() - previousStartTime + currentTimer
    const second = millisecond / 1000
    const minute = second / 60

    const ms = formatNumber(millisecond % 1000, 3)
    const sec = formatNumber(Math.floor(second) % 60, 2)
    const min = formatNumber(Math.floor(minute) % 60, 2)

    timer.textContent = `${min}:${sec}:${ms}`

    // remove it if use INTERVAL_OF_ANIMATION
    timerID = requestAnimationFrame(updateTimer)
}

function formatNumber(number, length) {
    return number.toString().padStart(length, '0')
}

