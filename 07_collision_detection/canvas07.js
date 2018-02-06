// Built on a canvas template by Christopher Lis (Chris Courses)

// Initial Setup
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

// Variables
const mouse = {
    x: innerWidth / 2,
    y: innerHeight / 2
};

const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66'];

// Event Listeners
addEventListener('mousemove', event => {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
});

addEventListener('resize', () => {
    canvas.width = innerWidth;
    canvas.height = innerHeight;

    init()
});

// Utility Functions
function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function randomColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)]
}

// calculating distance between two objects using Pythagorean Theorem
function getDistance(x1, y1, x2, y2) {

    let xDistance = x2 - x1; // horizontal distance between x2 and x1
    let yDistance = y2 - y1; // vertical distance between y2 and y1

    return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
    // based on Pythagorean Theorem, a2+b2=c2
    // The Math.sqrt() function returns the square root of a number
}

// Objects
function Circle(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color
}

Object.prototype.update = function() {
    this.draw()
};

Object.prototype.draw = function() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
    c.closePath()
};

// Implementation

let circle1;
let circle2;

function init() {

    circle1 = new Circle(300, 300, 100, 'black');
    circle2 = new Circle(undefined, undefined, 30, 'red');

    }

// Animation Loop
function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, canvas.width, canvas.height);

    circle1.update();
    circle2.x = mouse.x; // circle will follow mouse (we use function and event listener at the top)
    circle2.y = mouse.y;
    circle2.update();

    console.log(getDistance(circle1.x, circle1.y, circle2.x, circle2.y));
}

init();
animate();