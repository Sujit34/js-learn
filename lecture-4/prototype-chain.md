#### What is constructor call?
- Function call with a `new` keyword.

#### What are the **`four`** things the `new` keyword actually does when we put in front of a function call (**aka: constructor call**)?

1. Create a brand new empty object (aka constructed) out of thin air.
2. Newly created/constructed object is linked to (`[[Prototype]]`) the function's prototype.
3. Newly created/constructed object is set as the `this` binding for that function call.
4. Unless the function returns its own alternate object, the new-invoked call will automatically return the newly constructed object.

```js
function F1(n) {
  this.name = n;
}

const o1 = new F1('Alice');
```

#### Explanation of Prototype

Ex.1:
```js
function User(name) {
  this.name = name;
}

User.prototype.getName = function() {
  return this.name; 
}

const o1 = new User('a1');
const o2 = new User('a2');

o2.sayHello = function() {
  alert(`Hello, ${this.getName()}.`);
};
```

Object (f) -----------> object [hasOwnProperty, valueOf, ...]
            .prototype    | 
                          |
                          |
                          |
User (f) --------------> object
          .prototype

o1 [name = 'a1']  -> User.prototype -> Object.prototype -> null

o1.sayHello

o2 [name = 'a2', sayHello()]  -> User.prototype -> Object.prototype -> null

Ex.2:

```js
function Foo(name) {
  this.name = name;
}

Foo.prototype.identity = function() {
  return this.name;
}

function Bar(name) {
  Foo.call(this, name);
}

Bar.prototype.__proto__ = Foo.prototype;
Bar.prototype.speak = function {
  console.log(`Hello, ${this.identity()}`)
}

const b1 = new Bar('Alice');
const b2 = new Bar('Bar');
```

========================

- When a inherited function is executed, the value of `this` points to the `inheriting object`, not to the `prototype object` where the function is an own property.


```js
var ob = {
  a: 2,
  f1: function() {
    return this.a;
  }
}

console.log(ob.f1()); // ??

const o1 = Object.create(ob);
o1 -> ob
o1.__proto__ === ob // true

o1.a = 5;
o1 [a=5] -> ob[a=2, f1()]

console.log(o1.f1()); // 5
```

#### `hasOwnProperty()`

```js
const ob = {b: 2}

ob.__proto__.a = 'a';

console.log(ob); // {}
cosole.log(a); // a

console.log(ob.hasOwnProperty('a'));

```


#### Various prototype chain when creating object/array/function


```js
const a = {a: 1};
// a.__proto__ === Object.prototype // true

const b = [1, 2];
// b.__proto__ === Array.prototype // true
// b -> Array.prototype -> Object.prototype

function f1() {
  // ../
}
// f1.__proto__ === Function.prototype // true
// f1 -> Function.prototype -> Object.prototype

```

OLOO (Object Linked to Other Object):

```js
function Shape(height, width) {
  // this = r1
  this.height = height;
  this.width = width;
}

Shape.prototype.getHeight = function() {
  return this.height;
}

Shape.prototype.getWidth = function() {
  return this.width;
}

function Rectangle(height, width) {
  Shape.call(this, height, width);
}

Rectangle.prototype = Object.create(Shape.prototype)

Rectangle.prototype.getArea = function() {
  return this.height * this.width;
}

const r1 = new Rectangle(2, 3);

r1.getHeight();

console.log('r1: ', r1);
// r1 -> Rectangle.prototype -> Shape.prototype -> Object.prototype -> null

console.log(r1.getArea()); // 6
```

### Coverting to OLOO


```js
const Shape = {
  init: function(height, width) {
    this.height = height;
    this.width = width;
  },
  getHeight: function() {
    return this.height;
  },
  getWidth: function() {
    return this.width;
  }
}

const Rectangle = Object.create(Shape);
Rectangle.getArea = function() {
  return this.height * this.width;
}


const r1 = Object.create(Rectangle);
r1.init(2, 3);
console.log('r1: ', r1);
// r1 -> Rectangle -> Shape -> Object.prototype -> null

console.log(r1.getArea()); // 6

```


