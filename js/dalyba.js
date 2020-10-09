const nuo = 0;
const iki = 11;
const daliklis = 7;

let kiekis = 0;

for (let i = nuo; i <= iki; i++) {
    // jeigu i % daliklis duoda 0, tai
    if (i % daliklis === 0) {
        kiekis++;
    }
}
console.log(kiekis);