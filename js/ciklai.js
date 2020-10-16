// "use strict";

// ciklas: proceduru kartojimas kelis kartus
// for, while, do-white, foreach...

const prekes = [
    {
        kaina: 0.5,
        kiekis: 10
    },
    {
        kaina: 1,
        kiekis: 3
    },
    {
        kaina: 0.7,
        kiekis: 6
    },
    {
        kaina: 1.7,
        kiekis: 16
    },
]

console.log(prekes);

let saskaita = 0;

for (let i = 0; i < prekes.length; i++) {
    const preke = prekes[i];
    // apskaiciuoti kiek uzdirbciau is vienos prekes
    const uzdarbis = preke.kaina * preke.kiekis;
    // suma prideti prie kaupiamosios saskaitos
    saskaita = saskaita + uzdarbis;
    // isspausdiname paziureti kiek jau uzdirbau
    console.log(i, saskaita);
}