let e: "Директор" | "Бухгалтер" | "Менеджер" | "Программист";
e = "Менеджер"; // Все верно
// e = "Веб разработчик"; // Ошибка

// Type guard
function add (param: number | string) {
    if (typeof param === "string") {
        return param + " два";
    }
    return param + 2;
}

// Псевдонимы типов
type TForC = number | string;
let c: TForC;
function add2 (param: TForC) {
    if (typeof param === "string") {
        return param + " два";
    }
    return param + 2;
}

// Объединение
type TForNumberString = number | string;
type TForBooleanUndefined = boolean | undefined;
type TForAll = TForNumberString | TForBooleanUndefined;

// Пересечение
type TUser = {name: string, age: number};
type TProfessions = "Директор" | "Бухгалтер" | "Менеджер" | "Программист";
type TJob = {profession: TProfessions, salary: number};
type TEmployee = TUser & TJob;
let employee: TEmployee = {name: "Иван", age: 25, profession: "Программист", salary: 1000};

// Интерфейсы
interface IUser { 
    name: string;
    age: number;
}

interface IEmployee extends IUser {
    profession: TProfessions;
    salary: number;
}

// Только для чтения
const profession: readonly string[] = ["Директор", "Бухгалтер", "Менеджер", "Программист"];
// profession.push("Веб разработчик"); // Ошибка

// Кортежи
const v0: [string, number] = ["Иван", 25];
const v1: [string, number?] = ["Иван"]; // Необязательный элемент
// const v2: [string, number] = [null, undefined]; // Ошибка, не те типы
// const v3: [string, number] = [1, "Иван"]; // Ошибка, порядок обязателен
// const v4: [string, number] = ["Иван"]; // Ошибка, недостаточно элементов
// const v5: [string, number] = ["Иван", 1, 2]; // Ошибка, больше элементов чем в типе

v0.push(1); // После создания кортежа можно добавлять элементы, но только те, которые соответствуют типу кортежа
// v0.push(true); // Ошибка, не тот тип

// Не перепутать тип данных с интерфейсом
let obj: object;
let Obj: Object;
// obj = 5 // Ошибка, не тот тип
// Obj = 5 // Пропустит, т.к. это не тип данных, а интерфейс

// Необязательные свойства в типах и интерфейсах
type TUser2 = {
    name: string;
    age?: number; // Необязательное свойство
}
interface IUser2 {
    name: string;
    age?: number; // Необязательное свойство
}


type TUser3 = {
    name: string;
    age: number;
}

const user3 = {name: "Иван", age: 25, cat: "Мурзик"};
function getUser (user: TUser3) {
    // Не даст обратиться к свойству cat, т.к. оно не определено в типе TUser3
    // return user.cat; // Ошибка, нет такого свойства
    return user.age;
}
console.log(getUser(user3));