// Напишите функцию, которая находит уникальный элемент в массиве
{
const arr1 = [0,0,1,1,1,3,3,3,4,4,5,6,6,7,7];
const arr2 = ['dog', 'dog', 'cat', 'cat', 'sheep', 'parrot', 'parrot'];

const getUniqElement = (arr) => {
    let unicSet = new Set()
    let passSet = new Set()

    for (let i of arr) {
        if (passSet.has(i) || unicSet.has(i)) {
            unicSet.delete(i)
            passSet.add(i)
        } else {
            unicSet.add(i)
        }
    }

    return [...unicSet][0]
}

console.log("task1")
console.log(getUniqElement(arr1)); // 5
console.log(getUniqElement(arr2)); // 'sheep'
}