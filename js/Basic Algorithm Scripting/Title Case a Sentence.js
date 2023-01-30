function titleCase(str) {
    return str.split(' ').map(value=>value[0].toUpperCase()+value.toLowerCase().slice(1,)).join(' ')
}

console.log(titleCase("I'm a little tea pot"));