#### Ex-1: What's wrong with the following codes? Fix it: (write as many solutions as you can)

```js
<button id="btn-0">Button 1</button>
<button id="btn-1">Button 2</button>
<button id="btn-2">Button 3</button>

<script type="text/javascript">
  const prizes = ['A Unicorn!', 'A Hug!', 'Fresh Laundry!'];
  for (var btnNum = 0; btnNum < prizes.length; btnNum++) {

    // For each of our buttons, when the user clicks it...
    document.getElementById(`btn-${btnNum}`).onclick = () => {

      // Tell her what she's won!
      alert(prizes[btnNum]);
    };
  }
</script>
```

#### Ex-2: Fix the following code: (write as many solutions as you can)

```js
function assignTorpedo (name, passengerArray) {
  var torpedoAssignment;
  for (var i = 0; i < passengerArray.length; i++) {
    if (passengerArray[i] == name {
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
