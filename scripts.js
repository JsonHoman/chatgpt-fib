const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const toggleButton = document.getElementById('toggle-button');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let squares = [];
let interval;
let isRunning = false;
const maxSquares = 30;

const colors = [
    'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'
];

function fibonacci(n) {
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

function drawSquare() {
    if (squares.length >= maxSquares) {
        clearInterval(interval);
        return;
    }
    
    const size = fibonacci(squares.length + 1) * 10;
    const color = colors[squares.length % colors.length];
    
    let x, y;
    if (squares.length === 0) {
        x = canvas.width / 2 - size / 2;
        y = canvas.height / 2 - size / 2;
    } else {
        const prevSquare = squares[squares.length - 1];
        const direction = squares.length % 4;
        switch (direction) {
            case 0:
                x = prevSquare.x;
                y = prevSquare.y - size;
                break;
            case 1:
                x = prevSquare.x + prevSquare.size;
                y = prevSquare.y;
                break;
            case 2:
                x = prevSquare.x;
                y = prevSquare.y + prevSquare.size;
                break;
            case 3:
                x = prevSquare.x - size;
                y = prevSquare.y;
                break;
        }
    }
    
    ctx.fillStyle = color;
    ctx.fillRect(x, y, size, size);
    squares.push({ x, y, size });
}

function toggleDrawing() {
    if (isRunning) {
        clearInterval(interval);
        toggleButton.textContent = 'Start';
    } else {
        interval = setInterval(drawSquare, 1000);
        toggleButton.textContent = 'Stop';
    }
    isRunning = !isRunning;
}

toggleButton.addEventListener('click', toggleDrawing);
