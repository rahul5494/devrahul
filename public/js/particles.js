// Set up canvas and its context
const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');

// Set canvas to full viewport size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Create an array for the particles
let particlesArray = [];

// Particle class to represent each particle
class Particle {
    constructor() {
        // Initialize particles at random positions
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 5 + 1; // Random size between 1 and 5
        this.speedX = Math.random() * 2 - 1; // Random speed for X direction
        this.speedY = Math.random() * 2 - 1; // Random speed for Y direction
        this.color = 'rgba(0, 149, 255, 0.91)'; // Particle color
    }

    // Method to update particle position
    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Create the "bouncing" effect by reversing direction when hitting canvas edges
        if (this.x > canvas.width || this.x < 0) {
            this.speedX = -this.speedX;
        }
        if (this.y > canvas.height || this.y < 0) {
            this.speedY = -this.speedY;
        }
    }

    // Method to draw particle on canvas
    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}
function createParticles() {
    // Set number of particles you want to create
    for (let i = 0; i < 1000; i++) {
        particlesArray.push(new Particle());
    }
}
function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
    }
    requestAnimationFrame(animateParticles);
}
createParticles();
animateParticles();
