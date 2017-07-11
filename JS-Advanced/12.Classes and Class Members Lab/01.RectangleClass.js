class Rectangle {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    calcArea() {
        return this.width * this.height;
    }
}

let r1 = new Rectangle(10, 20, 'Green');

console.log(r1);
console.log(r1.calcArea());