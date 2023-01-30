function frankenSplice(arr1, arr2, n) {
    let newarr=[...arr2]
    if (arr2.lenght>0){
        return arr1
    }else{
        newarr.splice(n, 0, ...arr1)
        return newarr
    }
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));