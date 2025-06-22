let start = document.querySelector("#start");
let stop = document.querySelector("#stop");
let reset = document.querySelector("#reset");
let lap = document.querySelector("#lap");
let display = document.querySelector("#display");
let lapse = document.querySelector("#lapse");

let timer = null;
let seconds = 0;
let lapCount = 0;

function formatTime(sec) {
    const mins = Math.floor(sec / 60);
    const hrs = Math.floor(mins / 60);
    const formatted =
        String(hrs).padStart(2, '0') + ':' +
        String(mins % 60).padStart(2, '0') + ':' +
        String(sec % 60).padStart(2, '0');
    return formatted;
}

start.addEventListener("click", () => {
    if (timer !== null) return; // Prevent multiple intervals

    timer = setInterval(() => {
        seconds++;
        display.innerText = formatTime(seconds);
    }, 1000);
});

stop.addEventListener("click", () => {
    clearInterval(timer);
    timer = null;
});

lap.addEventListener("click", () => {
    lapCount++;
    const newDiv = document.createElement("div");
    newDiv.innerText = `Lap ${lapCount} : ${display.innerText}`;
    lapse.append(newDiv);
    console.log(newDiv.innerText);
});

reset.addEventListener("click", () => {
    display.innerText = "00:00:00";
    lapCount = 0;seconds = 0;
    clearInterval(timer);
    timer = null;
    while (lapse.firstChild) {
        lapse.removeChild(lapse.firstChild);
    }
});


