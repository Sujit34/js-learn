function assignTorpedo (name, passengerArray) {
    var torpedoAssignment;

    // IIFE with parameter

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