import test from './test.mjs';

function square(num) {
    return num * num;
}

function inchesToMm(inches) {
    return inches * 25.4;
}

function squareRoot(num) {
    if (num === 0 || num === 1) return num;

    let guess = num;
    while (guess * guess > num) {
        guess = (guess + num / guess) / 2;
    }

    return guess;
}

function cube(num) {
    return num * num * num;
}

function circleArea(radius) {
    return 3.14 * radius * radius
}

function greet(name) {
    return `Hello, ${name}`;
}

let tests = test("Basic Functions")

tests.isEqual(square(5), 25, "Square of 5 should be 25");
tests.isEqual(inchesToMm(2), 50.8, "2 inches should be 50.8mm");
tests.isInRange(squareRoot(49), 6.9, 7.1, "Square root of 49 should be around 7");
