const inquirer = require("inquirer");
const SVG = require("../examples/svg.js");
const { Circle, Triangle, Square } = require("./shapes.js");
const { writeFile } = require("fs/promises");

class CLI {
    constructor() {
        this.text = "";
        // Array of task objects e.g. [{ text: string, priority: bool }, ...]
        this.tasks = [];
    }

    run() {
        return inquirer
        .prompt([
            {
                type: "input",
                name: "text",
                message: "Please enter the text up to three characters"
            }
        ])
        .then(({ text }) => {
            if( text.length > 3 ){
                console.error("Please enther no more than 3 characters")
                return;
            }

            this.text = text;
            return this.questions();
        })
    }

    questions() {
        return inquirer.prompt([
            {
                type: "input",
                name: "textColor",
                message: "Please enter a text color keyword or a hexadecimal number"
            },
            {
                type: "list",
                name: "shapeType",
                choices: ["circle", "triangle", "square"],
                message: "Please choose a shape of logo"
            },
            {
                type: "input",
                name: "shapeColor",
                message: "Please enter a shape color keyword or a hexadecimal number"
            },
        ])
        .then(( {textColor, shapeType, shapeColor} ) => {
            let shape;

            switch(shapeType){
                case "circle":
                    shape = new Circle();
                    shape.setColor(shapeColor);
                    break;
                
                case "triangle":
                    shape = new Triangle();
                    shape.setColor(shapeColor);
                    break;

                case "square":
                    shape = new Square();
                    shape.setColor(shapeColor);
                    break;

                default:
                    break;
            }

            const svg = new SVG();
            svg.setTextElement(this.text, textColor);
            svg.setShapeElement(shape);

            return writeFile("logo.svg", svg.render())
        })
        .then(() => console.log("Generated logo.svg"))
        .catch((err) => console.log(err))
    }
}

module.exports = CLI;