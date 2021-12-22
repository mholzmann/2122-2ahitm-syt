let count: number = 1;

setInterval(function() {
    console.log(count);
    count++;
}, 1000);

// output: 1, 2, 3, 4, 5, ... (one number per second)