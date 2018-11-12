E1. load order:

```js
var text = undefined;

function output() {
  var text = undefined;
  console.log(text);
  text = 'inside';
}
text = 'outside';

output();
```

### E2 Load Order

```js
function f1() {
  // function f2() {
  //   return 12;
  // }
  function f2() {
    return 7;
  }

  return f2();

}

```
### E3. Load Order

```js
function f1() {
  var f2 = undefined;
  var f2 = undefined;

  function f3() {
    return 'nothing';
  }

  f2 = function () {
    return 12;
  }

  return f2();

  // unreachable
  f2 = function() {
    return 7;
  }
}
f1 ();
```

### E4. Load Order

```js
  var f2 = undefined;
  var f2 = undefined;

  return f2();
```

### E5

```js
var name = undefined;
var age = undefined;
var email = undefined;
var getName = undefined;


function f1() {                   
    return "f1 returns 1";          
  }  

  name = "Alice";
  age = function() {            
    return 50;                      
  };

  email = "a@b.com";

  f1 = function() {                 
    return "f1 returns 2";          
  };

  getName();
  return name; 
```