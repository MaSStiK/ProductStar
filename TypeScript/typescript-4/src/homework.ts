// Двойной факториал
const doubleFactorial = (n: number): number => {
    if (n < 0) console.log("Негативное число не может быть факториалом");
    if (n === 0 || n === 1) return 1;
    return n * doubleFactorial(n - 2);
}
console.log(`doubleFactorial(5): ${doubleFactorial(5)}`);
console.log(`doubleFactorial(9): ${doubleFactorial(9)}`);

// Функция с rest параметром
const sumAll = (...numbers: number[]): number => {
    let result: number = 0;
    for (let number of numbers) {
        result += number;
    }
    return result;
}
console.log(`sumAll(1,5,3,6,8,5): ${sumAll(1,5,3,6,8,5)}`);
console.log(`sumAll(9,15,7,2,1,0): ${sumAll(9,15,7,2,1,0)}`);


// Перегрузка функции
function calculate(x: number, y: number, operation: string): number;
function calculate(...args: (number | string)[]): number;

function calculate(...args: (number | string)[]): number {
    // Если переданы два числа и операция
    if (args.length === 3) {
        switch (args[2] as string) {
            case "+":
                return (args[0] as number) + (args[1] as number);
            case "-":
                return (args[0] as number) - (args[1] as number);
            case "*":
                return (args[0] as number) * (args[1] as number);
            case "/":
                return (args[0] as number) / (args[1] as number);
            default:
                console.log("Неизвестная операция");
        }
    } else {
        // Если переданы: число, операция, число, операция, число и тд
        // Берем за исходное число первый элемент
        // Далее через цикл с шагом в 2 этерируем числа и операции 
        let result: number = args[0] as number;
        for (let i = 1; i < args.length; i += 2) {
            switch (args[i] as string) {
                case "+":
                    result += args[i + 1] as number;
                    break;
                case "-":
                    result -= args[i + 1] as number;
                    break;
                case "*":
                    result *= args[i + 1] as number;
                    break;
                case "/":
                    result /= args[i + 1] as number;
                    break;
                default:
                    console.log("Неизвестная операция");
            }
        }
        return result
    }
    console.log("Неправильно указаны аргументы функции");
    return 0;
}

console.log(`calculate(10, 5, "+"): ${calculate(10, 5, "+")}`);
console.log(`calculate(10, 5, "-"): ${calculate(10, 5, "-")}`);
console.log(`calculate(10, 5, "*"): ${calculate(10, 5, "*")}`);
console.log(`calculate(10, 5, "/"): ${calculate(10, 5, "/")}`);

console.log(`calculate(10, "+", 5, "*", 2, "-", 3): ${calculate(10, "+", 5, "*", 2, "-", 3)}`);

// Переписал функции в стрелочные функции кроме функции с перегрузкой, т.к. не дает переназначить параметры



// Функция высшего порядка
function applyOperation(arr: number[], operation: (num: number) => number): number[] {
    return arr.map(operation);
}

// Функция которая будет умножать все числа на 2
const double = (x: number): number => x * 2;
console.log(`applyOperation([1, 2, 3, 4], double): ${applyOperation([1, 2, 3, 4], double)}`);
console.log(`applyOperation([5, 10, 15, 20], double): ${applyOperation([5, 10, 15, 20], double)}`);