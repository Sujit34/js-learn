Global Scope
------------

- var, const, let

```js
function g1() {
  const PORT = 1234;

  {
    PORT = 5678; 
    // Error, name has already been declared

    console.log(PORT); // 1234
  }

  f1();

  {
    console.log(PORT); // 5678
  }
  ```
  f2()

}

Local Scope
-----------  

- Function Scope
- Block Scope:

```js
function f1 {

  if (true) {
    var a = 5;
  } 

  for(var ii = 0; ii < 10; ii++) {
    console.log(a);
  }

  {
    var block3 = 10;
  }

  function inner() {
    var innerA = 100;

    return innerA;
  }
  inner();
}
```


#### Scope Chain (how hs works!

- Everything is executed in an Execution context
- Function invocation creates a new Execution context
- Each Execution context has:
  - It's own variable env.
  - Special `this` object.
  - Reference to its Env.
- Global scope does not have outer Env. it's the most outer scope.
- 