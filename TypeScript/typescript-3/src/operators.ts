let value = "hello world";
// let valueLength: number = (<string>value).length;
let valueLength: number = (value as string).length;
console.log("valueLength:",valueLength);

let numbers: number[] = [1, 2, 3, 4, 5];
let sum: number = 0;

for (let num of numbers) {
    sum += num;
}

if (sum > 10) {
    console.log("> 10");
} else {
    console.log("<= 10");
}

for (let i: number = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

let roots: number[] = []
for (let num of numbers) {
    roots.push(Math.sqrt(num));
}
console.log("roots:", roots);


let i: number = 5;
do {
    console.log(i);
    i--;
} while (i > 0);