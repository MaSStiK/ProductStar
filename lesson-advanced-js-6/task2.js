{
    // Задача 2. Сортировка пузырьком
    function bubbleSort(arr) {
        for (let i = 0; i < arr.length - 1; i++) {
            for (let l = 0; l < arr.length - 1 - i; l++) {
                if (arr[l] > arr[l + 1]) {
                    let temp = arr[l]
                    arr[l] = arr[l + 1]
                    arr[l + 1] = temp
                }
            }
        }

        return arr
    }
    
    console.log("task 2");
    console.log(bubbleSort([3, 2, 10, -2, 0]));
    console.log(bubbleSort([8, 16, 84, -82, 35]));
}