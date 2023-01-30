function bouncer(arr) {
    return arr.filter(a=>a?a:a);
}

console.log(bouncer([null, NaN, 1, 2, undefined]));
