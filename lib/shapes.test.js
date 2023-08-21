const { Circle, Triangle, Square } = require("./shapes.js");

// Circle Shape
describe("Shapes", () => {
    describe("Circle", () => {
        it("should return circle shape", () => {
            const shape = new Circle();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<circle cx="150" cy="100" r="100" fill="blue" />');
        });
    });

    // Triangle Shape
    describe("Triangle", () => {
        it("should return triangle shape", () => {
            const shape = new Triangle();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<polygon points="0,200 300,200 150,0" fill="blue" />');
        });
    });

    // Square Shape
    describe("Square", () => {
        it("should return square shape", () => {
            const shape = new Square();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<rect x="50" y="0" width="200" height="200" fill="blue" />');
        });
    });
});
