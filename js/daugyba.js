/*
typeof - tipo nustatymo operatorius
typeof 5 -> 'number'
typeof 'dsf' -> 'string'
typeof true -> 'boolean'
*/

function daugyba(a, b) {
    // input validacija
    // ar pirma duota reiksme yra skaiciaus tipo
    if (typeof a !== 'number') {
        return 'ERROR: pirmas ne skaicius.';
    }
    if (!isFinite(a)) {
        return 'ERROR: pirmas ne normalus skaicius.';
    }

    // ar antra duota reiksme yra skaiciaus tipo
    if (typeof b !== 'number') {
        return 'ERROR: antras ne skaicius.';
    }
    if (!isFinite(b)) {
        return 'ERROR: antras ne normalus skaicius.';
    }
    // if (isNaN(b)) {
    //     return 'ERROR: antras ne normalus (NaN) skaicius.';
    // }
    // if ('' + b === 'NaN') {
    //     return 'ERROR: antras ne normalus (NaN) skaicius.';
    // }
    // if ('' + b === 'Infinity') {
    //     return 'ERROR: antras ne normalus (Infinity) skaicius.';
    // }

    // logic + output
    return a * b;
}


console.log(daugyba(2, 2), '->', 4);
console.log(daugyba(-2, 2), '->', -4);
console.log(daugyba(-2, -3), '->', 6);
console.log(daugyba(-2.5, -3), '->', 7.5);

console.log(daugyba('2', 2));
console.log(daugyba('a', 2));
console.log(daugyba(2, '2'));
console.log(daugyba(2, 'a'));

console.log(daugyba(2, NaN));
console.log(daugyba(2, Infinity));