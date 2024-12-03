console.log("bubbleSort");

function bubbleSort(arr) {
    const len = arr.length
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }

    return arr
}

console.log(bubbleSort([5, 8, 9, 8, 5, 2, 12, 51, 5, 56, 5, 6, 1, 16,516, 156]));
