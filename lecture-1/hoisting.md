Hoisting
--------
E1.

```js
var text = 'outside';

function output() {
  console.log(text);   // undefined
  var text = 'inside';
}
output();

```

### E2. 

- Memory is set aside for all necessary variables and `declared functions`

```js
function f1() {
  function f2() {
    return 12;
  }

  return f2();

  function f2() {
    return 7;
  }
}

f1(); // ???
```

### E3. Hoisting for `Function Expression`

```js
function f1() {
  var f2 = function () {
    return 12;
  };

  return f2();

  var f2 = function() {
    return 7;
  };
}

f1(); // ???
```

### E4. Return statement is at the top

```js
function f1() {

  return f2();

  var f2 = function () {
    return 12;
  };

  function f3() {
    return 'nothing';
  }


  var f2 = function() {
    return 7;
  };
}

f1(); // ???
```

#### Hoisting Rules:

1. For all variable declarations, put the corresponding declarations at the top of the function. Assign them a value of `undefined` and maintain their order.

2. Now that variable declarations have been placed at the top, remove the original declarations, but leave any associated assignments.

3. Then, hoist all function declarations to immediately after your variable declarations, maintaining their order as well.

4. Any function expression assignment is treated here as executable code, and does not change the load order.

5. Remove any unreachable statements after the first return statement.



### E5.

```js

function hoistingOrder() {          
  function f1() {                   
    return "f1 returns 1";          
  }                                 
  var name = "Alice";               
  var age = function() {            
    return 50;                      
  };                                
  var email = "a@b.com";            
  f1 = function() {                 
    return "f1 returns 2";          
  };                                

  getName();                        

  return name;                      

  f1 = function() {                 
    return "f1 returns 3"           
  };                                
  name = function() {               
    return "name was string before";
  };                                
  var getName = function() {        
    return 'Bob';                   
  };                                
}

hoistingOrder() // ??

```

### E6.

```js
function f1 () {

    {
    const name // <-- not undefined, not initialized?
    function f2() {
      var p     // undefined;
      var p     // undefined 
      return 1;
    }
    console.log('name: ', name);  // Error !!
    const name = 'Sajib';
  }

  // console.log('test: ', test);

}
```

Q. Why hoisting is important?

```js

function f1(val) {
// val --> 1, 6, 16, 36

  if (val > 20) return val;

    return f2(val + 2); // 37, 38, 39
}

function f2(val) {
  // val --> 3, 8, 18
    return f3(val) + 1; // 37, 38, 39
}

function f3(val) {
// val --> 3, 8, 18
  return f1(val * 2); // 36, 37, 38
}

f1(1);  // 39

```