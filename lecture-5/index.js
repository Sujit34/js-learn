const o1 = { a: 1 };

const o2 = Object.assign(o1, { b: 2 }, {c: 3});

const o3 = o1;


const p1 = Object.assign({}, o1)


console.log('o1: ', o1);
console.log('>>>: ', p1 === o1);
