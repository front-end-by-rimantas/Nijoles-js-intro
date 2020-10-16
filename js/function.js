// const a = 0;
// const b = 4;
// let sum1 = 0;

// for (let i = a; i <= b; i++) {
//     sum1 = sum1 + i;
// }

// console.log(sum1);


function sumaIntervale(nuo, iki) {
    let suma = 0;

    for (let i = nuo; i <= iki; i++) {
        suma = suma + i;
    }

    return suma;
}

console.log(sumaIntervale(0, 4));
console.log(sumaIntervale(-50, 50));
console.log(sumaIntervale(0, 50));
console.log(sumaIntervale(0, 100));


function divide(a, b) {
    return a / b;
}

function beLiekanos(nuo, iki, daliklis) {
    let kiekis = 0;

    // logic
    for (let i = nuo; i <= iki; i++) {
        if (i % daliklis === 0) {
            kiekis++;
        }
    }

    return `Skaičių intervale tarp ${nuo} ir ${iki}, besidalijančių be liekanos iš ${daliklis} yra ${kiekis} vienetai.`;
}

console.log(beLiekanos(0, 11, 3));
console.log(beLiekanos(0, 11, 5));
console.log(beLiekanos(0, 11, 7));