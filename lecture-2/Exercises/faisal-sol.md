## _Solution of Ex-1:-_
Here `btnNum` is equal to 3 for every button object as loop is completed fully. So we will get `undefined` as `prizes[3]` is `undefined`. 
`Onclick` is an event which is raised when the user clicks. `butNum` is a `var` which is hoisted in functional scope. So it will hoisted outside the loop. As `butNum` resides in global scope, here it will change as the loop goes on. So inside that annonymous function's scope, it will found the value of that global variable. We can visualize that by putting `debugger` in previous of `alert(btnNum)`. We have seen that the loop is fully completed, and when we click any button we found the debugger worked. We can visualise this also by turning that function as self-invoking too. Here it is:
```js
document.getElementById(`btn-${btnNum}`).onclick = function(){
  alert(prizes[btnNum]);
}();
```
Here we will see that it will automatically invoke as the loop goes and produces right output though without clicking as it is self-invoked. 
In summary, that annonymous function has global scope's variable named `btnNum`, which is equal to 3 as the loop is completed and also the function is invoked after the completion of loop. So we can get the right output by following some ways:-
##### change `var` into `let`:-
As we know `let` is hoisted in block element, so we can change the `var` into `let`.  So it will bind to the function's block and give right output. Here is the code:
```js 
const prizes = ['A Unicorn!', 'A Hug!', 'Fresh Laundry!'];
for (let btnNum = 0; btnNum < prizes.length; btnNum++) {
    document.getElementById(`btn-${btnNum}`).onclick = ()=>{
        alert(prizes[btnNum]);
    };
}
```
##### Using `closure`:-
Here we can use `closure` concept. We can give a closure to that annonymous function which has a parameter and will store the `butNum` of each iteration by invoking inside the block.
```js
for (var btnNum = 0; btnNum < prizes.length; btnNum++) {
  function message(btnNum){
        document.getElementById(`btn-${btnNum}`).onclick = ()=>{
            alert(prizes[btnNum]);
        };
    }
    message(btnNum);
}
```
##### Bind a function from button's DOM event `onclick` attribute:-
Here we can use an attribute of a button `onclick` which will invoke a function named `message` in the script. Here is the code:-
```html
<button id="btn-0" onclick="message(0)">Button 1</button>
<button id="btn-1" onclick="message(1)">Button 2</button>
<button id="btn-2" onclick="message(2)">Button 3</button>

<script type="text/javascript">
  const prizes = ['A Unicorn!', 'A Hug!', 'Fresh Laundry!'];
  function message(btnNum){
    alert(prizes[btnNum]);
  }
</script>
```

## _Solution of Ex-2:-_
The right output do'nt occur because `i` is `var` here. So it will hoisted in the `assignTorpedo` by initialing `undefined`. As loop continues and the function `torpedoAssignment` will store the reference of that variable `i` in it's closure. So in it's closure, it will store `i` is equal to `6` after the loop ends. So we can fix this by following these:
##### 1.Changing `var` to `let`:-
```js
for (let i = 0; i < passengerArray.length; i++) {
    if (passengerArray[i] == name) {
      torpedoAssignment = function () {
        console.log('name: ', name);
        console.log('#: ', i+1);
      }
    }
}
```
##### 2. Using `break`:-
```js
for (var i = 0; i < passengerArray.length; i++) {
    if (passengerArray[i] == name) {
      torpedoAssignment = function () {
        console.log('name: ', name);
        console.log('#: ', i+1);
      }
      break;
    }
}
```
##### 3.Using IIFE:-
```js
for (var i = 0; i < passengerArray.length; i++) {
    if (passengerArray[i] == name) {
      (function () {
        console.log('name: ', name);
        console.log('#: ', i+1);
      })();
    }
}
```
##### 4. Invoking function directly:-
```js
function assignTorpedo (name, passengerArray) {
  var torpedoAssignment = function (key) {
    console.log('name: ', name);
    console.log('#: ', key+1);
  };
  for (var i = 0; i < passengerArray.length; i++) {
    if (passengerArray[i] == name) {
      return torpedoAssignment(i);
    }
  }
  
}

var subPassengers = ["Luke", "Leia", "Han", "Alice", "Yoda", "Boba"];
assignTorpedo("Alice", subPassengers);
```
