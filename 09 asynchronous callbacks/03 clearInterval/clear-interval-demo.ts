let count: number = 1;

// setInterval() returns a timer which identifies the interval
const timer = setInterval(function() {
    console.log(count);
    count++;
}, 1000);

setTimeout(function() {
    // the timer can be used for stopping the interval
    clearInterval(timer);
}, 5100);

// output: 1, 2, 3, 4, 5 (one number per second)