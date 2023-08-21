class SVG {
    constructor() {
        this.textElement = "";
        this.shapeElement = "";
    }

    render() {
        return `
            <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
                ${this.shapeElement} 
                ${this.textElement} 
            </svg>
        `;
    }

    setTextElement(text, color) {
        this.textElement = `<text x="150" y="120" font-size="50" text-anchor="middle" fill="${color}">${text}</text>`;
    }

    setShapeElement(shape) {
        this.shapeElement = shape.render();
    }
}

module.exports = SVG;