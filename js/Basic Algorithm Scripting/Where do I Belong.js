function getIndexToIns(arr, num) {
    arr.sort((a,b)=>a-b)
    for(let i=0;i<=arr.length; i++){
        if(arr[i]==num){
            return i
        }
        if(arr[i]>num || i==arr.length){
            return i
        }

    }
}

console.log(getIndexToIns([2, 5, 10], 15));