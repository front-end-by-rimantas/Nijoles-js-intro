const a = 'arstgh';
const b = "tyrweffb";

// kabute yra teksto turinio dalis
const c = 'ars"tdhg';
const d = "eet'ryth";
const e = 'ewetsr " adtsgf \' atsgtg';
const f = "asfdgf' afds\"gasfdg";

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);


const leftColumn2 = '<div class="left">' +
    '< div class="content" >' +
    'LEFT CONTENT' +
    '</div >' +
    '</div >';

console.log(leftColumn2);

const leftClass = 'left awesomeness';
const contentClass = 'content friday';

const leftColumn = '<div class="' + leftClass + '">\
                        <div class="'+ contentClass + '" >\
                            LEFT CONTENT\
                        </div >\
                    </div >';
console.log(leftColumn);


const leftAwesomeness = `<div class="${leftClass}">
                            <div class="${contentClass}">
                                LEFT CONTENT
                            </div>
                        </div>`;