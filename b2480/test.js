let count = 0;

function ifFun(x, y, z) {
    let yz = y || z
    if(x == yz ) {
       count++
}
}


ifFun(6, 3, 3);
ifFun(3, 6, 3);
console.log(count);
// ifFun(3, 3, 6);

