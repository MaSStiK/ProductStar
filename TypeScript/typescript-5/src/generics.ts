// Обобщения (Generics) в TypeScript
function getArray<T>(param: number): T[] {
    return new Array<T>(param);
}

getArray<number>(10); // Вернет number[] из 10 элементов
getArray<string>(5); // Вернет string[] из 5 элементов


type TUser4<T> = {
    name: string;
    id: T;
}

interface IProduct<T> {
    id: number
    name: string;
    props: T;
}


// Ограничение обобщения
type THasName = {
    name: string;
}

function printName<T extends THasName>(param: T) {
    console.log(param.name);
}

const userAlex = {name: "Алексей", age: 25, cat: "Мурзик"};
printName(userAlex); // Вернет "Алексей"


// Keyof
type TUser5 = {
    id: number;
    name: string;
    age: number;
}
type UserKeys = keyof TUser5; // UserKeys теперь равно "id" | "name" | "age"

function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}
const user5: TUser5 = {id: 1, name: "Иван", age: 25};
const userName = getValue(user5, "name"); // Вернет "Иван"
const userId = getValue(user5, "id"); // Вернет 1
const userAge = getValue(user5, "age"); // Вернет 25
// const userEmail = getValue(user5, "email"); // Ошибка, нет такого свойства


// Утилитарные типы
interface Person {
    name: string;
    age: number;
    email: string;
    address: string;
}

let omittedPerson: Omit<Person, "email" | "address">; // Вернет {name: string, age: number}
