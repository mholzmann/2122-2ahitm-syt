let num = 123.45;
console.log('type of num is ' + typeof num);            // output: number
console.log('value of num is ' + num);                  // output: 123.45

console.log('-------------------------------------');

const noNum = parseFloat("Euro 123.45");                // doesn't work
console.log("type of noNum is " + typeof noNum);        // output: number
console.log("value of noNum is " + noNum);              // output: NaN
console.log("value of (noNum + 5) is " + (noNum + 5));  // output: NaN

console.log('-------------------------------------');

// === doesn't work for NaN
console.log(noNum === NaN);         // expected output: true, actual output: false

// use isNaN() to check whether value is NaN 
console.log(isNaN(noNum));          // output: true 
console.log(isNaN(num));            // output: false