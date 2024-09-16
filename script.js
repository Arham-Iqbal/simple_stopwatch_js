let timedisplay=document.getElementById("time")
let start=document.getElementById("Start")
let stop=document.getElementById("Stop")
let reset=document.getElementById("Reset")
let isrunning=false;

let milliseconds=0;
let seconds=0;
let minutes=0;



start.addEventListener("click", () => {
    if (!isrunning) {
        isrunning = true; 
        intervalId = setInterval(() => {
            milliseconds++;
            if (milliseconds === 100) {
                milliseconds = 0;
                seconds++;
                if (seconds === 60) {
                    seconds = 0;
                    minutes++;
                }
            }

            let formattedMinutes = String(minutes).padStart(2, '0');
            let formattedSeconds = String(seconds).padStart(2, '0');
            let formattedMilliseconds = String(milliseconds).padStart(2, '0');

            timedisplay.innerText = `${formattedMinutes}:${formattedSeconds}:${formattedMilliseconds}`;
        }, 10); 
    }
});



stop.addEventListener("click",()=>{
    clearInterval(intervalId);
    isrunning=false;
})

reset.addEventListener("click", () => {
    clearInterval(intervalId);
    isRunning = false;
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    timedisplay.innerText = "00:00:00"; 
});