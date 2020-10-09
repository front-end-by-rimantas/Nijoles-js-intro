/*
Palyginimo operatoriai:
naudotini:  >, <, >=, <=, ===, !==
nenaudotini: ==, !=
*/

if (4 !== 2) {
    console.log('taip');
} else {
    console.log('ne');
}

// if () {}
// if () {} else {}
// if () {} else if () {} else if () {} else if () {}
// if () {} else if () {} else if () {} else if () {} else {}

const spalva = 'raudona';

switch (spalva) {
    case 'melyna':
        console.log('Melynakis');
        break;

    case 'raudona':
        console.log('Issimiegok');
        break;

    case 'zalia':
        console.log('Pieva tu...');
        break;

    default:
        console.log('A tu turi akis?');
        break;
}


const day = 'asds';

switch (day) {
    case 'pir':
    case 'ant':
    case 'tre':
    case 'ket':
    case 'pet':
        console.log('darbo diena');
        break;

    case 'ses':
    case 'sek':
        console.log('savaitgalis');
        break;

    default:
        console.log('Tai ne savaites diena');
        break;
}

if ('5' == 5) {
    console.log('taip');
} else {
    console.log('ne');
}

console.log('5' + 4);
console.log(4 + '5');
console.log(1 + 2 + '3' + 4 + '5');