function F1(name) {  // camelCase
  this.name = name;
}

const ob1 = new F1('Alice');
console.log('ob1: ', ob1);

const ob2 = new F1('Bob');
console.log('ob2: ', ob2);
