console.log('A');

// anonymous function executed after 5 s
setTimeout(function () {
    console.log('B')
}, 5000);

// anonymous function executed after 0,75 s
setTimeout(function () {
    console.log('C')
}, 750);

// anonymous function executed after 3 s
setTimeout(function () {
    console.log('D')
}, 3000);

console.log('E');

// output: A E C D B
