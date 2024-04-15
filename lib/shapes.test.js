const { Triangle, Circle, Square } = require('./shapes');

describe('Square Class', () => {
    test('Square renders correct SVG', () => {
        const square = new Square("green");
        expect(square.render()).toEqual('<rect x="100" y="50" width="100" height="100" fill="green" />');
    });

    test('Square renders correct SVG with different color', () => {
        const square = new Square("blue");
        expect(square.render()).toEqual('<rect x="100" y="50" width="100" height="100" fill="blue" />');
    });
});