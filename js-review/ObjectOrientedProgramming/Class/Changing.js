function calculateShape(width, height) {
    this.width = width;
    this.height = height;
};

calculateShape.prototype = {
    constructor: calculateShape,
    getArea() {
        console.log('Area of the shape is: ', this.width * this.height);
        //return this.width, this.height;
    }
};

calculateShape.prototype.getPerimeter = function() {
    console.log('Perimeter of the shape is: ', (this.width * 2) + this.height * 2);
}

let shape = new calculateShape(8, 8);
shape.getArea()
    //Get the area of the rectangle
shape.getPerimeter();

// ---> "Is prototype of rectangle instance?", Object.getPrototypeOf(new Rectangle()) ===
console.log(Object.prototype.isPrototypeOf(calculateShape.prototype));
Object.getPrototypeOf(new calculateShape());