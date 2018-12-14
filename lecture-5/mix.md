
### Asynchronous JS

```js
function main() {
  console.log('A');

  setTimeout(() => {
    console.log('B');
  }, 1000);

  console.log('C');
}

main();
```

Example 2:

```js
function main() {
  console.log('A');

  setTimeout(() => {
    console.log('B');
  }, 1000);


  holdNSeconds(3); // blocker code
  console.log('C');
}

main();

holdNSeconds(n) {
  let start = Date.now();
  let now = start;

  while (now - start < (n*1000)) {
    now = Date.now();
  }
}
```

Example 3: Callback hell

```js
doA(() => {
  doB();

  // doB() {
  //   return new promise((resolve, reject) {
  //     resolve()
  //   })
  // };

  doC(() => {
    doD();
  });

  doE();
});

doF();
```

- Execution serial:

```js
first(() => {
  third();

  fourth(() => {
    sixth();
  });

  fifth()

});

second();
```

#### Promise

```js

function getFoo() {

return new Promise(function(resolve, reject) {
    setTimeout(() => {
      // resolve('foo');
      reject('ERROR!');
    }, 2000)
  });
}

getFoo()
  .then((resp) => {
    console.log('resp: ', resp);
    return 'sajib';
  })
  .then((resp) => {
    console.log('second resp :', resp);
  })
  .catch((err) => {
    console.log('err: ', err);
  });

console.log('after getFoo()');

```

#### async / await

```js

function getUser(userId) {

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('john');
    }, 1000);
  });
}

function getBankBalance(userName) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(userName === 'john') {
        resolve('$2000');
      } else {
        reject('User is not John!!');
      }
    }, 2000);
  });
}


// ES6
// function getBalance() {
// 
//   getUser()
//     .then(getBankBalance)
//     .then((balance) => {
//       console.log('>>>>>', balance);
//     });
// }
// 
// getBalance();

// ES8

async function getBalance() {


  try {
    const userName = await getUser('Alice');
    const balance = await getBankBalance(userName);
  
    console.log('>>>>>', balance);
  } catch(err) {
    console.log('err: ', err)
  }
}

getBalance();
```

```js
async function doubleAndAdd(a, b) {
  [resp1, resp2] = await Promise.all([doubleAfter1Sec(a), doubleAfter1Sec(b)]);
  return resp1 + resp2;
}

function doubleAfter1Sec(val) {
  return new Promise(resolve => {
    setTimeout(resolve(val * 2), 1000);
  });
}

console.log('>>>>', doubleAndAdd(1, 2));
```



Promise.all()

api1 -- 1s

api2 -- 2s 

resp1, resp2 : 


#### Object.create() 

```js
const o1 = { a: 1 };

const o2 = Object.assign(o1, { b: 2 }, {c: 3});

const o3 = o1;


const p1 = Object.assign({}, o1)


console.log('o1: ', o1);
console.log('>>>: ', p1 === o1);

```

const ob1 = {
  foo: function () {
    this; // ob2
  }
}


ob1.foo().call(ob2)