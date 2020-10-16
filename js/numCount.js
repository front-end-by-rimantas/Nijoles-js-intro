function numCount(number) {
    console.log(number);

    // validation
    if (typeof number !== 'number') {
        return 'ERROR: ne skaiciaus tipo reiksme.'
    }
    if (!isFinite(number)) {
        return 'ERROR: ne normalus skaicius.'
    }

    // logic
    let count = 0;
    const textNumber = '' + number;

    count = textNumber.length;

    // nustatome ar turi minusa
    if (number < 0) {
        count--;
    }
    // nustatome ar turi desimtaine dali
    if (number % 1 !== 0) {
        count--;
    }

    // output
    return count;
}


console.log(numCount(true));
console.log(numCount(false));
console.log(numCount('asd'));
console.log(numCount(NaN));
console.log(numCount(Infinity));
console.log(numCount(-Infinity));

console.log(numCount(5), '=>', 1);
console.log(numCount(781), '=>', 3);
console.log(numCount(37060123456), '=>', 11);
console.log(numCount(-5), '=>', 1);
console.log(numCount(3.1415), '=>', 5);
console.log(numCount(-3.1415), '=>', 5);
console.log(numCount(Math.PI), '=>', 16);


// console.log(numCount(5465165498484684946464546573546864646), '=>', 37);
// console.log(numCount(1000000000000000000000000000000000000), '=>', 37);
// console.log(numCount(0.000000000000000000000000000000000001), '=>', 37);