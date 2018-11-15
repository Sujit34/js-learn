>>>>>>>>>>>>>>>>>>Solution of Exercise-1 >>>>>>>>>>>>>>>>>>>>>>>

Load order after hoisting:
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
};

Output explanation:

Output:
>>>a: undefined
d is not a function

Explanation: when a = b() executed, b function
defination return the value of c which is undefined and so a is assigned undefined, so console log printed the output as undefined value.
After that when c = d() executed, d function still undefined so it gives a type error which is 'd is not a function' and then the program termineted by console


>>>>>>>>>>>>>>>>>>Solution of Exercise-2 >>>>>>>>>>>>>>>>>>>>>>>

Load order after hoisting:

function getName(name){
    if(name){
        let firstname;
        console.log(firstName);
        firstName = name;
    }
}
getName("Alice");

Output: can't access lexical declaration `firstName' before initialization

Explanation: Variables declared using let, can not be accessed before they declared