// shapes.js

class Shape {
    constructor(color) {
        this.color = color;
    }

    setColor(color) {
        this.color = color;
    }
}

class Triangle extends Shape {
    render() {
    }
}

class Circle extends Shape {
    render() {
    }
}

class Square extends Shape {
    render() { 
    }
}

module.exports = { Triangle, Circle, Square };
