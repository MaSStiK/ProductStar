"use strict";
const dataArray = [
    { name: "Alex" },
    { age: 30 },
    { city: "New York" },
    { country: "USA" }
];
function createObject(data) {
    const person = {};
    data.forEach(item => {
        Object.assign(person, item);
    });
    return person;
}
const result = createObject(dataArray);
console.log("Workshop 1");
console.log(result);
// ----------
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [1, 2, 3];
function compareArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    return arr1.every((item, index) => item === arr2[index]);
}
console.log("Workshop 2");
console.log(compareArrays(arr1, arr2)); // false
console.log(compareArrays(arr1, arr3)); // true
// ----------
const users = [
    { name: "Alice", age: 25, city: "New York" },
    { name: "Bob", age: 30, city: "Paris" },
];
// T Может быть любым объектом, а K - ключами этого объекта
function filterObject(usersArray, keys) {
    let result = [];
    result = usersArray.map(item => {
        const obj = {};
        keys.forEach(key => {
            if (item[key]) {
                obj[key] = item[key];
            }
        });
        return obj;
    });
    return result;
}
console.log("Workshop 3");
console.log(filterObject(users, ["name", "age"]));
console.log(filterObject(users, ["name", "city"]));
