#### Solution of Ex-1:-
###### Load order of following code after Hoisting:-

```javascript
var a = undefined;
var c = undefined;
var d = undefined;
function b() {
  return c;
}
a= b();
console.log('>>>a: ', a);
c = d();
console.log('>>>c: ', c);
d = function() {
  return b();
};
```
###### Explnation:-
The output is: `>>>a:  undefined
Uncaught TypeError: d is not a function`
Here variable 'a' has a function 'd' after hoisting which returns variable 'c' which is undefined. So it prints `>>>a:  undefined`. After that, it has `console.log('>>>c: ', c);` where variable 'c' has a function 'd', which is not defined as a function yet. That's why the output is `Uncaught TypeError: d is not a function`

#### Solution of Ex-2:-
The output is `Uncaught ReferenceError: firstName is not defined at getName`
`let` is hoisted by block scope. Accessing `let` or `const` variables before they’re declared will throw a `ReferenceError`, which happened here in block scope of `if` statement in `console.log(firstName)`. Temporal dead zone is created before declaring `let firstName = name;`.

#### Solution of Ex-3:-
Hoisting describes a feature of how Javascript is interpreted by the browser. 
