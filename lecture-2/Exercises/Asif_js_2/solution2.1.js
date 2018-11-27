function assignTorpedo (name, passengerArray) {
    var torpedoAssignment;
    
    // sol 1: just replacing var by let

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