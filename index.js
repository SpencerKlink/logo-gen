import fs from 'fs';
import { createCanvas } from 'canvas';
import inquirer from 'inquirer';
import { Triangle, Circle, Square } from './lib/shapes.js';

async function main() {
  const { text, textColor, shape, shapeColor } = await inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters for the logo:',
      validate: input => input.length <= 3 || 'Text must be up to three characters.'
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter the text color (keyword or hex):'
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['Triangle', 'Circle', 'Square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter the shape color (keyword or hex):'
    }
  ]);

  let shapeInstance;
  switch (shape) {
    case 'Triangle':
      shapeInstance = new Triangle(shapeColor);
      break;
    case 'Circle':
      shapeInstance = new Circle(shapeColor);
      break;
    case 'Square':
      shapeInstance = new Square(shapeColor);
      break;
  }

  const canvas = createCanvas(300, 200, 'svg');
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = shapeColor;
  switch (shape) {
    case 'Circle':
      ctx.beginPath();
      ctx.arc(150, 100, 50, 0, Math.PI * 2, true);  
      ctx.fill();
      break;
    case 'Triangle':
      ctx.beginPath();
      ctx.moveTo(150, 50);
      ctx.lineTo(100, 150);
      ctx.lineTo(200, 150);
      ctx.closePath();
      ctx.fill();
      break;
    case 'Square':
      ctx.fillRect(100, 50, 100, 100); 
      break;
  }

  ctx.fillStyle = textColor;
  ctx.font = '24px Helvetica';
  ctx.textAlign = 'center';
  ctx.fillText(text, 150, 125);  

  const buffer = canvas.toBuffer('image/svg+xml');
  fs.writeFileSync('logo.svg', buffer);
  console.log('Generated logo.svg');
}

main();
