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
        const points = "150, 18 244, 182 56, 182";
        const svgString = `<polygon points="${points}" fill="${this.color}" />`;
        return svgString;
    }
}

class Circle extends Shape {
    render() {
        const cx = 150; 
        const cy = 100;
        const r = 50;  
        const svgString = `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${this.color}" />`;
        return svgString;
    }
}

class Square extends Shape {
    render() {
        const x = 100; 
        const y = 50;
        const width = 100; 
        const height = 100;
        const svgString = `<rect x="${x}" y="${y}" width="${width}" height="${height}" fill="${this.color}" />`;s
        return svgString;
    }
}


module.exports = { Triangle, Circle, Square };
