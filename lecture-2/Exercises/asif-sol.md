# Exercise 1

## Solution 1:
`1.1: using let instead of var`

```Js
<button id="btn-0">Button 1</button>
<button id="btn-1">Button 2</button>
<button id="btn-2">Button 3</button>

<script type="text/javascript">
  const prizes = ['A Unicorn!', 'A Hug!', 'Fresh Laundry!'];

  for (let btnNum = 0; btnNum < prizes.length; btnNum++) {

    // For each of our buttons, when the user clicks it...
    document.getElementById(`btn-${btnNum}`).onclick = () => {

      // Tell her what she's won!
      alert(prizes[btnNum]);
    };
  }
</script>
```
--- 
`1.2: using an extra variable using let so that it can be found in block scope`
```js
<button id="btn-0">Button 1</button>
<button id="btn-1">Button 2</button>
<button id="btn-2">Button 3</button>

<script type="text/javascript">
  const prizes = ['A Unicorn!', 'A Hug!', 'Fresh Laundry!'];
  
  for (var btnNum = 0; btnNum < prizes.length; btnNum++) {
    let btn = btnNum;
    // For each of our buttons, when the user clicks it...
    document.getElementById(`btn-${btn}`).onclick = () => {

      // Tell her what she's won!
      alert(prizes[btn]);
    };
  }
</script>
```
---

`1.3: Using Immediately-invoked Function Expressions`

```js
<button id="btn-0">Button 1</button>
<button id="btn-1">Button 2</button>
<button id="btn-2">Button 3</button>

<script type="text/javascript">
  const prizes = ['A Unicorn!', 'A Hug!', 'Fresh Laundry!'];
  for (var btnNum = 0; btnNum < prizes.length; btnNum++) {

    // For each of our buttons, when the user clicks it...
    (function(btn){
      document.getElementById(`btn-${btn}`).onclick = () => {
        console.log(btn);
        // Tell her what she's won!
        alert(prizes[btn]);
      };
    })(btnNum)
  }
</script>
```
---
`1.4: using Immediately-invoked Function Expressions with parameter`

```js
<button id="btn-0">Button 1</button>
<button id="btn-1">Button 2</button>
<button id="btn-2">Button 3</button>

<script type="text/javascript">
  const prizes = ['A Unicorn!', 'A Hug!', 'Fresh Laundry!'];
  for (let btnNum = 0; btnNum < prizes.length; btnNum++) {

    // For each of our buttons, when the user clicks it...
    document.getElementById(`btn-${btnNum}`).onclick = (function() {

      // Tell her what she's won!
      return function() {
          alert(prizes[btnNum]);
      }
    })(btnNum);
  }
</script>
```


# Exercise 2
## Solution


`2.1: just replacing var by let`
```js
function assignTorpedo (name, passengerArray) {
    var torpedoAssignment;
    
    for (let i = 0; i < passengerArray.length; i++) {
      if (passengerArray[i] == name){
        torpedoAssignment = function () {
          console.log('name: ', name);
          console.log('#: ', i+1);
        }
      }
    }
    return torpedoAssignment;
  }
  
  var subPassengers = ["Luke", "Leia", "Han", "Alice", "Yoda", "Boba"];
  var giveAssignment = assignTorpedo("Alice", subPassengers);
  
  giveAssignment();
  // output: name: Alice #: 6
  // correct output should be: name: Alice #: 4
```
---

`2.2: using an extra let variable in block scope`
```js
function assignTorpedo (name, passengerArray) {
    var torpedoAssignment;

    for (var i = 0; i < passengerArray.length; i++) {
        let  j = i;
      if (passengerArray[i] == name){
        torpedoAssignment = function () {
          console.log('name: ', name);
          console.log('#: ', j+1);
        }
      }
    }
    return torpedoAssignment;
  }
  
  var subPassengers = ["Luke", "Leia", "Han", "Alice", "Yoda", "Boba"];
  var giveAssignment = assignTorpedo("Alice", subPassengers);
  
  giveAssignment();
  // output: name: Alice #: 6
  // correct output should be: name: Alice #: 4
```
---
`2.3: Calling a function which is invoked immediately when 'torpedoAssignment' is called `
```js
function assignTorpedo (name, passengerArray) {
    var torpedoAssignment;

    for (var i = 0; i < passengerArray.length; i++) {
      (function(j){if (passengerArray[i] == name){
        torpedoAssignment = function () {
          console.log('name: ', name);
          console.log('#: ', j+1);
        }
      }
    })(i)
    }
    return torpedoAssignment;
  }
  
  var subPassengers = ["Luke", "Leia", "Han", "Alice", "Yoda", "Boba"];
  var giveAssignment = assignTorpedo("Alice", subPassengers);
  
  giveAssignment();
  // output: name: Alice #: 6
  // correct output should be: name: Alice #: 4
```
---

`2.4: A function is called with parameter`
```js
function assignTorpedo (name, passengerArray) {
    var torpedoAssignment;

    for (var i = 0; i < passengerArray.length; i++) {
      if (passengerArray[i] == name){
        torpedoAssignment = (function (i) {
          return function(){
              console.log('name: ', name);
              console.log('#: ', i+1);
          }
        })(i)
      }
    }
    return torpedoAssignment;
  }
  
  var subPassengers = ["Luke", "Leia", "Han", "Alice", "Yoda", "Boba"];
  var giveAssignment = assignTorpedo("Alice", subPassengers);
  
  giveAssignment();
  // output: name: Alice #: 6
  // correct output should be: name: Alice #: 4
```
