var a = undefined;
var c = undefined;
var d = undefined;

function b() {
    return c;
  }

  a = b();
  c = d();
  d = function() {
    return b();
  };

  console.log('>>>a: ', a); //undefined
  console.log('>>>c: ', c); // d is not a function