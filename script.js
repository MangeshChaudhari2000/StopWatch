var hour = document.getElementById('hour')
var minute = document.getElementById('minute')
var second = document.getElementById('second');
var start = document.getElementById('start');
var stop1 = document.getElementById('stop')
var reset = document.getElementById('reset')

let [ms, sec, min, hr] = [0, 0, 0, 0];
let int ;

//taking response from user
start.addEventListener('click', () => {
    console.log("start clicked");
    if (int != null) {
        clearInterval(int);
    }
    int = setInterval(displayTimer, 1);
});

stop1.addEventListener('click', () => {
    clearInterval(int);
    console.log("stop clicked");

});

reset.addEventListener('click', () => {
    clearInterval(int);
    [ms, sec, min, hr] = [0, 0, 0, 0];
    hour.innerHTML = '00';
    minute.innerHTML = '00';
    second.innerHTML = '00';
    console.log("reset clicked");
});

function displayTimer() {
    ms += 10;
    if (ms == 1000) {
        ms = 0;
        sec++;
        if (sec == 60) {
            sec = 0;
            min++;
            if (min == 60) {
                min = 0;
                hr++;
            }
        }
    }
    let h = hr < 10 ? "0" + hr : hr;
    let m = min < 10 ? "0" + min : min;
    let s1 = sec < 10 ? "0" + sec : sec;

    hour.innerHTML = h;
    minute.innerHTML = m;
    second.innerHTML = s1;
}




