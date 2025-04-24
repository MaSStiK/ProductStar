"use strict";
// Функции в TypeScript
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Alex"));
// Функция с опциональным параметром и предустановленным параметром
function greet2(name, isMorning, message = "Good day") {
    if (isMorning) {
        return `Good morning, ${name}!`;
    }
    return `${message}, ${name}!`;
}
console.log(greet2("Alex", true));
console.log(greet2("Igor"));
// Функция с параметром rest
function greetMany(message, ...names) {
    return `${message} ${names.join(", ")}!`;
}
console.log(greetMany("Hello", "Alex", "Igor", "Oleg", "Vlad"));
function add(x, y) {
    if (typeof x === "string" && typeof y === "string")
        return x.concat("", y);
    if (typeof x === "number" && typeof y === "number")
        return x + y;
}
console.log(add("Hello", "World"));
console.log(add(20, 5));
// Анонимная функция
const add2 = function (x, y) {
    console.log(x + y);
};
add2(10, 20);
// Стрелочная функция
let multiply = (x, y) => x * y;
console.log(multiply(5, 2));
// Функция с callback
function createAdder(x) {
    return function (y) {
        return x + y;
    };
}
let addFive = createAdder(5);
console.log(addFive(10));
let addTen = createAdder(10);
console.log(addTen(20));
// Конструктор функции
let addNew = new Function("x", "y", "return x + y;");
console.log(addNew(90, 9));
// Функция генератор
function* numberGenerator() {
    let i = 0;
    while (true) {
        yield i++;
    }
}
let gen = numberGenerator();
console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
// Типизация this
function multiplyByTwo() {
    return this * 2;
}
console.log(multiplyByTwo.call(5)); // 10
