const text = 'abcdef';
const size = text.length;
// reverse string ??

let reverse = '';

// for (let i = 0; i < size; i++) {
//     const raide = text[size - 1 - i];
//     reverse = reverse + raide;
//     console.log(i, raide, reverse);
// }

// for (let i = size - 1; i >= 0; i--) {
//     reverse = reverse + text[i];
//     console.log(reverse);
// }

for (let i = 0; i < size; i++) {
    const raide = text[i];
    reverse = raide + reverse;
    console.log(i, raide, reverse);
}