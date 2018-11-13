var a = undefined;
var c = undefined;
var d = undefined;

function b() {
    return c;
  }

  a = b();
  console.log('>>>a: ', a); //undefined
  c = d();
  console.log('>>>c: ', c); // d is not a function
  d = function() {
    return b();
  };

  
  