"use strict";
let owner1 = {
    name: "Alex",
    age: 25,
};
let owner2 = {
    name: "Oleg",
    age: 33,
};
let owners = [owner1, owner2];
let car = {
    model: "Tesla",
    year: 2020,
};
car["owners"] = owners; // Добавляем массив объектов в объект
console.log("car.model:", car.model); // Выводим модель автомобиля
console.log("car.year:", car.year); // Выводим год выпуска автомобиля
console.log("car.owners:", car.owners); // Выводим массив объектов владельцев автомобиля
