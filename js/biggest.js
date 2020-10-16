function biggest(list) {
    // validation
    if (!Array.isArray(list)) {
        return 'ERROR: ne array tipo.';
    }
    if (list.length === 0) {
        return 'ERROR: tuscias sarasas.'
    }

    // logic
    let biggestNumber = -Infinity;

    for (let i = 0; i < list.length; i++) {
        const number = list[i];
        if (typeof number !== 'number' || !isFinite(number)) {
            continue;
        }

        if (number > biggestNumber) {
            biggestNumber = number;
        }
    }

    // post logic validation
    if (biggestNumber === -Infinity) {
        return 'ERROR: sarase nebuvo nei vieno normalaus skaiciaus.'
    }

    // output
    return biggestNumber;
}

console.log(biggest('pomidoras'));
console.log(biggest([]));
console.log(biggest(5));
console.log(biggest('adsfd'));
console.log(biggest(true));
console.log(biggest(false));
console.log(biggest(NaN));
console.log(biggest(Infinity));

console.log(biggest([1]), '=>', 1);
console.log(biggest([1, 2, 3]), '=>', 3);
console.log(biggest([-5, 78, 14, 0, 18]), '=>', 78);
console.log(biggest([69, 69, 69, 69, 66]), '=>', 69);
console.log(biggest([-1, -2, -3, -4, -5, -6, -7, -8]), '=>', -1);

console.log(biggest([-5, 78, 'labas', 14, 0, 18]), '=>', 78);
console.log(biggest([-5, 78, 14, 0, 18, 'labas']), '=>', 78);
console.log(biggest(['labas', -5, 78, 14, 0, 18]), '=>', 78);
console.log(biggest(['labas', -5, true, false, [], [5, 8], Infinity]), '=>', -5);
console.log(biggest(['labas', true, false, [], [5, 8], Infinity]));