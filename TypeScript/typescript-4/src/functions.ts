// Функции в TypeScript
function greet(name: string): string {
    return `Hello, ${name}!`;
}
console.log(greet("Alex"));

// Функция с опциональным параметром и предустановленным параметром
function greet2(name: string, isMorning?: boolean, message: string = "Good day"): string {
    if (isMorning) {
        return `Good morning, ${name}!`;
    }
    return `${message}, ${name}!`;
}
console.log(greet2("Alex", true));
console.log(greet2("Igor"));

// Функция с параметром rest
function greetMany(message: string, ...names: string[]): string {
    return `${message} ${names.join(", ")}!`;
}
console.log(greetMany("Hello", "Alex", "Igor", "Oleg", "Vlad"));


// Перегрузка функций
function add(x: string, y: string): string;
function add(x: number, y: number): number;

function add(x: any, y: any): any {
    if (typeof x === "string" && typeof y === "string") return x.concat("", y);
    if (typeof x === "number" && typeof y === "number") return x + y;
}
console.log(add("Hello", "World"));
console.log(add(20, 5));

// Анонимная функция
const add2 = function(x: number, y: number): void {
    console.log(x + y);
}
add2(10, 20);

// Стрелочная функция
let multiply = (x: number, y: number): number => x * y;
console.log(multiply(5, 2));

// Функция с callback
function createAdder(x: number): (y: number) => number {
    return function(y: number): number {
        return x + y;
    }
}
let addFive = createAdder(5);
console.log(addFive(10));

let addTen = createAdder(10);
console.log(addTen(20));

// Конструктор функции
let addNew = new Function("x", "y", "return x + y;");
console.log(addNew(90, 9));

// Функция генератор
function* numberGenerator(): Generator<number> {
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
function multiplyByTwo(this: number): number {
    return this * 2;
}
console.log(multiplyByTwo.call(5)); // 10
