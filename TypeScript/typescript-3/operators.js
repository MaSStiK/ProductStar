"use strict";
let value = "hello world";
// let valueLength: number = (<string>value).length;
let valueLength = value.length;
console.log("valueLength:", valueLength);
let numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let num of numbers) {
    sum += num;
}
if (sum > 10) {
    console.log("> 10");
}
else {
    console.log("<= 10");
}
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
let roots = [];
for (let num of numbers) {
    roots.push(Math.sqrt(num));
}
console.log("roots:", roots);
let i = 5;
do {
    console.log(i);
    i--;
} while (i > 0);
