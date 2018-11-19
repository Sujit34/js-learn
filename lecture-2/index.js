
// f1(1);  // 39
console.log(f1(1));  // 39

function f1(val) {
  // val --> 1, 6, 16, 36
  
    if (val > 20) return val;
  
      return f2(val + 2); // 37, 38, 39
  }
  
  function f2(val) {
    // val --> 3, 8, 18
      return f3(val) + 1; // 37, 38, 39
  }
  
  function f3(val) {
  // val --> 3, 8, 18
    return f1(val * 2); // 36, 37, 38
  }
  

