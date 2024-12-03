console.log("sumRecursive");

function sumRecursive(arr) {
    if (!arr.length) {
      return 0;
    }
  
    // Ваш код тут
    return arr[0] + sumRecursive(arr.slice(1));
}

console.log(sumRecursive([10,20,30]));