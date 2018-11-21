
# Exercise_1 Solutions:#


####1.By using let instead of var####
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
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
</body>
</html>
```


####2. By using IIFE####

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
  <button id="btn-0">Button 1</button>
<button id="btn-1">Button 2</button>
<button id="btn-2">Button 3</button>

<<script type="text/javascript">
  const prizes = ['A Unicorn!', 'A Hug!', 'Fresh Laundry!'];
  for (var btnNum = 0; btnNum < prizes.length; btnNum++) {
    
    // For each of our buttons, when the user clicks it...
    (function(btnNum){
      document.getElementById(`btn-${btnNum}`).onclick = () => {
        // Tell her what she's won!
        alert(prizes[btnNum]);
      };
    })(btnNum)
  }
</script>

</body>
</html>
```


#Exercise_2 Solutions: #


####1. By using let instead of var :####

```javascript
function assignTorpedo (name, passengerArray) {
    var torpedoAssignment;
    for (let i = 0; i < passengerArray.length; i++) {
      if (passengerArray[i] == name ){
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
```


  ####2.By using IIFE####

```javascript
   function assignTorpedo (name, passengerArray) {
    var torpedoAssignment;


    for (var i = 0; i < passengerArray.length; i++) {
      (function(i){if (passengerArray[i] == name){
        torpedoAssignment = function () {
          console.log('name: ', name);
          console.log('#: ', i+1);
        }
      }
    })(i)
    }
    return torpedoAssignment;
  }
  
  var subPassengers = ["Luke", "Leia", "Han", "Alice", "Yoda", "Boba"];
  var giveAssignment = assignTorpedo("Alice", subPassengers);
  
giveAssignment();
```

3.By using break


function assignTorpedo (name, passengerArray) {
    var torpedoAssignment;


    for (var i = 0; i < passengerArray.length; i++) {
     if (passengerArray[i] == name){
        torpedoAssignment = function () {
          console.log('name: ', name);
          console.log('#: ', i+1);
        }
        break;
      }
    
    }
    return torpedoAssignment;
  }
  
  var subPassengers = ["Luke", "Leia", "Han", "Alice", "Yoda", "Boba"];
  var giveAssignment = assignTorpedo("Alice", subPassengers);
  
giveAssignment();







