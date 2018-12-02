function Shape(height, width) {
  // this = r1
  this.height = height;
  this.width = width;
}

Shape.prototype.getHeight = function() {
  return this.height;
}

// Shape.prototype.getWidth = function() {
//   return this.width;
// }

// function Rectangle(height, width) {
//   Shape.call(this, height, width);
// }

Rectangle.prototype = Object.create(Shape.prototype)

Rectangle.prototype.getArea = function() {
  return this.height * this.width;
}

const r1 = new Rectangle(2, 3);

Shape.prototype.getWidth = function() {
  return this.width;
}

function Rectangle(height, width) {
  Shape.call(this, height, width);
}

r1.getHeight();

console.log('r1: ', r1);
// r1 -> Rectangle.prototype -> Shape.prototype -> Object.prototype -> null

console.log(r1.getArea()); // 6
