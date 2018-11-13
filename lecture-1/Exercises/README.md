#### Ex-1: What will be load order of following code after Hoisting? Explain Output?

```js
var a = b();
console.log('>>>a: ', a);

var c = d();
console.log('>>>c: ', c);

function b() {
  return c;
}

var d = function() {
  return b();
};
```

#### Ex-2: Explain the output?

```js
function getName(name) {
  if (name) {
    console.log(firstName);
    let firstName = name;
  }
}

getName('Alice');
```

#### Ex-3: Explain the importance of `Hoisting` in JavaScript with an example?

