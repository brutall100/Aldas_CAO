import addHeaderToElement from './header.js';
import addCarBrandsToApp from './cars.js';
import multiplication from './multi.js';

// Add Header
addHeaderToElement(document.body);

// Add Car Brands

addCarBrandsToApp(document.body);

// Multiply two numbers
const a = 3;
const b = 4;
const result = multiplication(a, b);

console.log(`The result of multiplying ${a} and ${b} is ${result}.`);
