function getName(name){
	if(name){
		let firstName = undefined;
		console.log(firstName);
		firstName = name;
	}
}

getName('Alice');


-------- explanation --------

First of all, I was confused about the answer. But after that I learnt 
difference between 'var' and 'let/const' is former one is initialised with
undefined when it is hoisted to the top but later one is uninitialised. So 
a ReferenceError is given when they are tried to be accessed.