function sumAll(arr) {
    let sum = arr[1]
    if (arr[0] > arr[1]) {
        while (arr[0] > arr[1]) {
            sum += arr[0];
            arr[0]--
        }
        return sum;
    }
    while (arr[0] < arr[1]) {
        sum += arr[0];
        arr[0]++
    }
    return sum;
}

console.log(sumAll([4, 1]));