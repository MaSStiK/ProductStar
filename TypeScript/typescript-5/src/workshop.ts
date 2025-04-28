const dataArray: TPerson[] = [
    {name: "Alex"},
    {age: 30},
    {city: "New York"},
    {country: "USA"}
];

type TPerson = Record<string, string | number>;

function createObject(data: TPerson[]) {
    const person: TPerson = {};
    data.forEach(item => {
        Object.assign(person, item);
    })
    return person;
}

const result = createObject(dataArray);
console.log("Workshop 1");
console.log(result);

// ----------

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [1, 2, 3];
function compareArrays<T>(arr1: T[], arr2: T[]): boolean {
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
    {name: "Alice", age: 25, city: "New York"},
    {name: "Bob", age: 30, city: "Paris"},
];

// T Может быть любым объектом, а K - ключами этого объекта
function filterObject<T extends object, K extends keyof T>(usersArray: T[], keys: K[]) {
    let result: Partial<Pick<T, K>>[] = [];
    result = usersArray.map(item => {
        const obj: Partial<Pick<T, K>> = {};
        keys.forEach(key => {
            if (item[key]) {
                obj[key] = item[key];
            }

        })
        return obj;
    })
    return result;
}

console.log("Workshop 3");
console.log(filterObject(users, ["name", "age"]));
console.log(filterObject(users, ["name", "city"]));