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