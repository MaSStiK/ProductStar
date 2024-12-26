// Напишите функцию, которая находит все подстроки с уникальными элементами в массиве
// и возвращает их количество
{
const arr = [10,8,3,2,3,1,2,1,5,6,8,9,4,3,2,4,7,8,6,43,1];

const getAllSubUniqArr = (arr) => {
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        const set = new Set()

        for (let j = i; j < arr.length; j++) {
            if (set.has(arr[j])) break

            set.add(arr[j])
            count++
        }   
    }
    return count
}

console.log("task3")
console.log(getAllSubUniqArr(arr)); // 83
}