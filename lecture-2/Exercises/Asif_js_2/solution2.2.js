function assignTorpedo (name, passengerArray) {
    var torpedoAssignment;

    // sol 2: using an extra let variable in block scope

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