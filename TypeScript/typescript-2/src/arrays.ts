let list: number[] = [1, 2, 3, 4, 5]; // Массив чисел
console.log("list:", list);
list.pop();
console.log("list.pop():", list);
list.push(6);
console.log("list.push(6):", list);
console.log("list.length:", list.length);

let list2: Array<number> = [7, 5, 6, 15, 10, 0, 44]; // Альтернативный синтаксис
console.log("list2:", list2);
list2 = list2.sort((a, b) => a - b)
console.log("list2.sort():", list2);


let names: string[] = ["Alice", "Bob", "Charlie"]; // Массив строк
let mixed: (number | string)[] = [1, "two", 3, "four"]; // Массив с несколькими типами данных
let tuple: [number, string, boolean] = [1, "Alice", true]; // Кортеж с фиксированным количеством и типами элементов

// Массив объектов с определенной структурой
let objectArray: { name: string; age: number }[] = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
];

// Массив кортежей с фиксированным количеством и типами элементов
let arrayOfTuples: [number, string][] = [
    [1, "Alice"],
    [2, "Bob"],
    [3, "Charlie"],
]; 

// Массив массивов чисел
let arrayOfArrays: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

// Массив объектов с определенной структурой и типами свойств
let arrayOfObjects: { id: number; name: string }[] = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
];