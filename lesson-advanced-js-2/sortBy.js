console.log("sortBy");

function sortBy(arr, keys) {
    // Если массив ключей
    if (Array.isArray(keys)) {
        arr.sort((a, b) => {
            for (let key of keys) {
                if (a[key] > b[key]) return 1
                if (a[key] < b[key]) return -1
            }
        })
        return arr
    }
    
    // Если ключ один
    return arr.sort((a, b) => a[keys] > b[keys])
}

// Если ключ один
const users = [{name: "Ivan", age: 30}, {name: "Alisa", age: 25}, {name: "Anton", age: 48}]
console.log(sortBy(users, "age"));

// Если массив ключей
const users2 = [{name: "Ivan", age: 30}, {name: "Alexey", age: 30}, {name: "Kirill", age: 30}, {name: "Alisa", age: 25}, {name: "Anton", age: 48}]
console.log(sortBy(users2, ["age", "name"]));