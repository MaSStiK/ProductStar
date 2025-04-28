"use strict";
const numbers = [1, 2, 3, 4, 5];
const target = 3;
function findElement(numbersArray, target) {
    for (let i = 0; i < numbersArray.length; i++) {
        if (numbersArray[i] === target)
            return i;
    }
    return -1;
    // Или же можно использовать метод findIndex
}
const index = findElement(numbers, target);
console.log("Задание 1");
console.log(`Индекс элемента ${target} в массиве: ${index}`);
// ----------
const person1 = { name: 'Alice', age: 30 };
const person2 = { age: 25, city: 'New York' };
function mergeObjects(obj1, obj2) {
    let result = {};
    for (const key in obj1) {
        if (obj1.hasOwnProperty(key)) {
            result[key] = obj1[key];
        }
    }
    for (const key in obj2) {
        if (obj2.hasOwnProperty(key)) {
            result[key] = obj2[key];
        }
    }
    return result;
    // Или через Object.assign({}, obj1, obj2);
}
const mergedPerson = mergeObjects(person1, person2);
console.log("Задание 2");
console.log(mergedPerson);
