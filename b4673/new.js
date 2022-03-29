function makeSumValue(n) {
    let x = 1;
    let sumValues = [];

        let y = n % (10 * x);
        let value = Math.floor(y / (1 * x));
        sumValues.push(value);
    console.log(sumValues);
    return sumValues.reduce((acc, cur) => acc + cur, n);
}

console.log(makeSumValue(3))