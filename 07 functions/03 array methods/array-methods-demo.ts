const array: number[] = [7, 44, -3, 0, 66, -6, 11];

const positives = array.filter(function (value) {
    return value > 0;
});
console.log(positives);
// output: [ 7, 44, 66, 11 ]


console.log('------------------------');


const evens = array.filter(function (value) {
    return value % 2 === 0;
});
console.log(evens);
// output: [ 44, 0, 66, -6 ]


console.log('------------------------');


const oddIndexes = array.filter(function (value, index) {
    return index % 2 === 1;
});
console.log(oddIndexes);
// output: [ 44, 0, -6]


console.log('------------------------');


const firstNegative = array.find(function (value) {
    return value < 0;
});
console.log(firstNegative);
// output: -3


console.log('------------------------');


const strings: string[] = ['3', '-7.2', 'true', 'abc', '1.23'];
const numbers: Number[] = strings.map(parseFloat);
console.log(numbers);
// output: [ 3, -7.2, NaN, NaN, 1.23 ]