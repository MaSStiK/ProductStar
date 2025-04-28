"use strict";
let e;
e = "Менеджер"; // Все верно
// e = "Веб разработчик"; // Ошибка
// Type guard
function add(param) {
    if (typeof param === "string") {
        return param + " два";
    }
    return param + 2;
}
let c;
function add2(param) {
    if (typeof param === "string") {
        return param + " два";
    }
    return param + 2;
}
let employee = { name: "Иван", age: 25, profession: "Программист", salary: 1000 };
// Только для чтения
const profession = ["Директор", "Бухгалтер", "Менеджер", "Программист"];
// profession.push("Веб разработчик"); // Ошибка
// Кортежи
const v0 = ["Иван", 25];
const v1 = ["Иван"]; // Необязательный элемент
// const v2: [string, number] = [null, undefined]; // Ошибка, не те типы
// const v3: [string, number] = [1, "Иван"]; // Ошибка, порядок обязателен
// const v4: [string, number] = ["Иван"]; // Ошибка, недостаточно элементов
// const v5: [string, number] = ["Иван", 1, 2]; // Ошибка, больше элементов чем в типе
v0.push(1); // После создания кортежа можно добавлять элементы, но только те, которые соответствуют типу кортежа
// v0.push(true); // Ошибка, не тот тип
// Не перепутать тип данных с интерфейсом
let obj;
let Obj;
const user3 = { name: "Иван", age: 25, cat: "Мурзик" };
function getUser(user) {
    // Не даст обратиться к свойству cat, т.к. оно не определено в типе TUser3
    // return user.cat; // Ошибка, нет такого свойства
    return user.age;
}
console.log(getUser(user3));
