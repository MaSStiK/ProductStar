const numbers = [1, 2, 3, 4, 5];
let target = 3;
function findElement<T>(numbersArray: T[], target: T): number {
    for (let i = 0; i < numbersArray.length; i++) {
        if (numbersArray[i] === target) return i;
    }
    return -1;

    // Или же можно использовать метод findIndex
}

let index = findElement(numbers, target);
console.log("Задание 1");
console.log(`Индекс элемента ${target} в массиве: ${index}`);

target = 5;
index = findElement(numbers, target);
console.log(`Индекс элемента ${target} в массиве: ${index}`);


// ----------

const person1 = { name: 'Alice', age: 30 };
const person2 = { age: 25, city: 'New York' };
function mergeObjects<T extends object, K extends object>(obj1: T, obj2: K) {
    let result: Partial<T & K> = {}
    for (const key in obj1) {
        if (obj1.hasOwnProperty(key)) {
            (result as any)[key] = obj1[key];
        }
    }

    for (const key in obj2) {
        if (obj2.hasOwnProperty(key)) {
            (result as any)[key] = obj2[key];
        }
    }
    return result;

    // Или через Object.assign({}, obj1, obj2);
} 
const mergedPerson = mergeObjects(person1, person2);
console.log("Задание 2");
console.log(mergedPerson);

const person3 = { name: 'Alex', city: 'Moscow'};
const person4 = { age: 20, city: 'Paris' };
const mergedPerson2 = mergeObjects(person3, person4);
console.log(mergedPerson2);
