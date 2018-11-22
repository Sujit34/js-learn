####Ex:1####

'''#Solve 1'''

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

'''#Solve 2'''

<button id="btn-0">Button 1</button>
<button id="btn-1">Button 2</button>
<button id="btn-2">Button 3</button>

<script type="text/javascript">
	for (var btnNum = 0; btnNum < prizes.length; btnNum++) {
	const prizes = ['A Unicorn!', 'A Hug!', 'Fresh Laundry!'];
		// For each of our buttons, when the user clicks it...
		(function(btnNumIn){
				document.getElementById(`btn-${btnNumIn}`).onclick = () => {
				alert(prizes[btnNumIn]);
			};
		})(btnNum);
	}
</script>

'''#Solve 3'''
<button id="btn-0">Button 1</button>
<button id="btn-1">Button 2</button>
<button id="btn-2">Button 3</button>

<script type="text/javascript">
	const prizes = ['A Unicorn!', 'A Hug!', 'Fresh Laundry!'];
	for (var btnNum = 0; btnNum < prizes.length; btnNum++) {
		// For each of our buttons, when the user clicks it...
		let btnNumIn = btnNum;
		document.getElementById(`btn-${btnNum}`).onclick = () => {
			// Tell her what she's won!
			alert(prizes[btnNumIn]);
		};
	}
</script>

'''#Solve 4'''
<button id="btn-0">Button 1</button>
<button id="btn-1">Button 2</button>
<button id="btn-2">Button 3</button>

<script type="text/javascript">
	const prizes = ['A Unicorn!', 'A Hug!', 'Fresh Laundry!'];
  for (var btnNum = 0; btnNum < prizes.length; btnNum++) {

    // For each of our buttons, when the user clicks it...
    document.getElementById(`btn-${btnNum}`).onclick = (function (j) {
      // Tell her what she's won!
      return () => alert(prizes[j]);
    })(btnNum)
  }
</script>



###Ex: 2###

'''Solve 1'''
function assignTorpedo (name, passengerArray) {
    var torpedoAssignment;
    for (let i = 0; i < passengerArray.length; i++) {
      if (passengerArray[i] == name) {
        torpedoAssignment = function () {
          debugger;
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
  
  '''#Solve 2'''
  function assignTorpedo (name, passengerArray) {
    var torpedoAssignment;
    for (var i = 0; i < passengerArray.length; i++) {
        (function (j){
            if (passengerArray[j] == name) {
                torpedoAssignment = function () {
                    console.log('name: ', name);
                    console.log('#: ', j+1);
                }
            }
        })(i);
    }
    return torpedoAssignment;
  }
  
  var subPassengers = ["Luke", "Leia", "Han", "Alice", "Yoda", "Boba"];
  var giveAssignment = assignTorpedo("Alice", subPassengers);
  
  giveAssignment();
  
  '''#Solve 3'''
  function assignTorpedo (name, passengerArray) {
    var torpedoAssignment;
    for (var i = 0; i < passengerArray.length; i++) {
        if (passengerArray[i] == name) {
          return function () {
          console.log('name: ', name);
          console.log('#: ', i+1);
        }
      }
    }
  }
  
  var subPassengers = ["Luke", "Leia", "Han", "Alice", "Yoda", "Boba"];
  var giveAssignment = assignTorpedo("Alice", subPassengers);
  
  giveAssignment();
  
  '''#Solve 4'''
  function assignTorpedo (name, passengerArray) {
    for (var i = 0; i < passengerArray.length; i++) {
        if (passengerArray[i] == name) {
          console.log('name: ', name);
          console.log('#: ', i+1);
          return;
      }
    }
  }
  
  var subPassengers = ["Luke", "Leia", "Han", "Alice", "Yoda", "Boba"];
  assignTorpedo("Alice", subPassengers);
  
  '''#Solve 5'''
  
  function assignTorpedo (name, passengerArray) {
    var torpedoAssignment;
    for (var i = 0; i < passengerArray.length; i++) {
      if (passengerArray[i] == name) {
        let j = i;
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