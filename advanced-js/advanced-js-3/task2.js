// Напишите функцию, которая принимает число n и возвращает n чаще всего встречающихся элементов в массиве
{
const arr1 = [0,0,1,1,1,1,3,3,3,4,4,5,6,6,7,7];
const arr2 = ['dog', 'dog', 'dog', 'cat', 'cat', 'sheep', 'parrot', 'parrot'];

const getPopularItems = (arr, n) => {
    let map = new Map()

    for (let item of arr) {
        map.set(item, (map.get(item) || 0) + 1)
    }

    let array = [...map.entries()]
    array.sort((a, b) => b[1] - a[1]) // Сортируем от большего к меньшему
    array = array.slice(0, n) // Отрезаем только нужное кол-во
    array = array.map(item => item[0]) // Убираем подсчет, оставляем только ключи

    return array
}

console.log("task2")
console.log(getPopularItems(arr1, 2)); // [1, 3]
console.log(getPopularItems(arr1, 1)); // [1]
console.log(getPopularItems(arr2, 1)); // ['dog']
console.log(getPopularItems(arr2, 3)); // ['dog', 'cat', 'parrot']
}