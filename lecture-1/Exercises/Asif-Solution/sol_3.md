If there are multiple functions and say, each one call another 
for performing some other task and return the value at that time 
'hoisting' is required to know each function before they are initialized
in the top to bottom manner.

function a(x){
    return b(x + 2);
}

function b(x){
    return c(x) + 1;
}
function c(){
    return a(2*x);
}

If hoisting is not done, then function a() does not know function b()
as it was not declared before. So for mutual recursion hoisting is necessary.