function repeatStringNumTimes(str, num) {
    let newstr=''
    while(num>0){
        num--
        newstr+=str
    }
    return newstr
}

console.log(repeatStringNumTimes("*", 3));