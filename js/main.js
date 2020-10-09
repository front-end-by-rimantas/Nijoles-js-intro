/*
Kintamuju tipai:
- number: 6
- string: 'labas'
- boolean: true, false
- array: [1, 2, 3], ['a', 'b', 'c']
- object: {name: 'Vardenis', age: 99}
- function
*/


console.log(123);
console.log('Labas :)');
console.log(5, '+', 2, '=', 5 + 2);
console.log((10 + 10 + 7) / 3);


const paz1 = 10;
const paz2 = 5;
const paz3 = 7;
const pazKiekis = 3;

const vidurkis = (paz1 + paz2 + paz3) / pazKiekis;

console.log(vidurkis);


const vedesIrTuriVaiku = false;
const issimiegojes = false;
const kvepuoja = true;

const vardenisMarks = [10, 8, 2, 7, 5];
const students = ['Petras', 'Maryte', 'Onute', 'John'];

const antrasStudentas = students[1];
console.log(students);
console.log(antrasStudentas);
console.log(students[8]);       // pozicija neegzistuoja -> undefined


const person = {
    name: 'Vardenis',
    age: 12,
    height: 120,
    weight: 40,
    marks: vardenisMarks,
    friends: students,
    animals: [],
    'kaip tu': 'Aciu, gerai'
}

const personName = person['name'];
console.log(personName);
const personMarks = person['marks'];
console.log(personMarks);
const firtsMark = personMarks[0];
const secondMark = person['marks'][1];
console.log(firtsMark);
console.log(secondMark);

console.log(person.friends[0]);
console.log(person.marks[2]);
console.log(person.name);
console.log(person["kaip tu"]);