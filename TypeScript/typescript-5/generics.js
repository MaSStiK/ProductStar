"use strict";
// Обобщения (Generics) в TypeScript
function getArray(param) {
    return new Array(param);
}
getArray(10); // Вернет number[] из 10 элементов
getArray(5); // Вернет string[] из 5 элементов
function printName(param) {
    console.log(param.name);
}
const userAlex = { name: "Алексей", age: 25, cat: "Мурзик" };
printName(userAlex); // Вернет "Алексей"
function getValue(obj, key) {
    return obj[key];
}
const user5 = { id: 1, name: "Иван", age: 25 };
const userName = getValue(user5, "name"); // Вернет "Иван"
const userId = getValue(user5, "id"); // Вернет 1
const userAge = getValue(user5, "age"); // Вернет 25
let omittedPerson; // Вернет {name: string, age: number}
