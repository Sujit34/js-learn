
```js
// Sol.4

for (var i =0; i < 5; i++) {
  setTimeout((function(j) {

    return function() {
      console.log('j: ', j); // ??
    }

  })(i), i*1000)
}

```

```js
// Sol.3

for (let i = 0; i < 5; i++) {
  i // 

  setTimeout(function() {
    console.log('i: ', i); // ??
  }, i*1000)
}

```

```js
// Sol.2

for (var i = 0; i < 5; i++) {
  let j = i;

  setTimeout(function() {
    console.log('j: ', j); // ??
  }, i*1000)
}

```

```js
// Sol.1

var f1 = function () {
  console.log('.......');
}

(f1)(); // f1 instance of Function

// IIFE 

for (var i = 0; i < 5; i++) {

(function (j) {

    setTimeout(function() {
      console.log('j: ', j); // ??
    }, i*1000)

  })(i)

  
}



```

```js

  var a = function() {
    console.log('i: ', i); // ??
  }

  a()

```


```js
for (var i = 0; i < 5; i++) {

  setTimeout(function() {
    console.log('i: ', i); // ??
  }, i * 1000)
}

```

1. function() {
    console.log('i: ', i); // ??
  }, 0

2. function() {
    console.log('i: ', i); // ??
  }, 1000  

3. function() {
    console.log('i: ', i); // ??
  }, 2000

4. .
5. . 

```js
function getAdd(x) {
  
  return function (y) {
    return x + y;
  }
}

const ob1 = getAdd(2);
console.log('ob1: ', ob1);
console.log(ob1(3));

const ob2 = getAdd(5);
console.log('ob2: ', ob2);

console.log(ob2(6));

```


- Nested Scope
--------------

```js
function f1() {
  let cnt = 0;

  // const callback = 

  setTimeout(function() {
    console.log(cnt++);
    const inner = 5;

    setTimeout(function() {
      console.log('inner: ', inner);
      console.log('cnt: ', cnt);
    }, 200);

  }, 100);


}
```


- Shared Scope

```js
function f1() {
  const cnt = 0;

  // const callback = 

  setTimeout(function() {
    console.log(cnt++);
  }, 100);

  setTimeout(function() {
    console.log(cnt++);
  }, 200);

}
```


- lexical Scoping / Closure?

```js
function getAdd(x, y) {

  return function () {
    const a = 10;
    console.log(x + y);
  }
}

const f1 = getAdd(2, 3);
const f2 = getAdd(4, 5);
console.log(f1);
console.log(f2);
```

