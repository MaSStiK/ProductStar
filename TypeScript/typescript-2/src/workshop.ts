let owner1: {
    name: string;
    age: number;
} = {
    name: "Alex",
    age: 25,
};

let owner2: {
    name: string;
    age: number;
} = {
    name: "Oleg",
    age: 33,
};

let owners: object[] = [owner1, owner2];

let car: {
    model: string;
    year: number;
    owners?: object[];
} = {
    model: "Tesla",
    year: 2020,
};

car["owners"] = owners; // Добавляем массив объектов в объект

console.log("car.model:",car.model); // Выводим модель автомобиля
console.log("car.year:",car.year); // Выводим год выпуска автомобиля
console.log("car.owners:",car.owners); // Выводим массив объектов владельцев автомобиля