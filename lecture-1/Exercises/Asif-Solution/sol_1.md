var a = undefined;
var c = undefined;
var d = undefined;

function b(){
	return c;
}

a = b();
console.log('>>>a: ', a);

c = d();
console.log('>>>c: ', c);

d = function(){
	return b();
}

---------------- Explanation ---------------

1) initallay all variables a, b, c, d hoist to the top.
2) Then function declaration b() hoists and function expression ( d = function() ) does not hoist. 3) After that execution begins , a = b(). return value of 'c' is undefined so value inside 'a' is     also undefined and prints('undefined').
4) In c = d(), as the function defination is not given, so returns an error.
