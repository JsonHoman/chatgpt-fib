const canvas = document.getElementById('fibCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

let squares = [];
let intervalId = null;
let squareCount = 0;

function drawSquare(x, y, size, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, size, size);
}

function nextSquare() {
    if (squareCount >= 30) {
        return;
    }

    let x, y, size;

    if (squareCount === 0) {
        x = centerX - 10;
        y = centerY + 10;
    } else if (squareCount === 1) {
        x = centerX - 10;
        y = centerY;
    } else {
        const prev = squares[squareCount - 1];
        const prev2 = squares[squareCount - 2];

        size = prev.size + prev2.size;
        switch (squareCount % 4) {
            case 2:
                x = prev.x + prev.size;
                y = prev.y;
                break;
            case 3:
                x = prev.x - prev2.size;
                y = prev.y + prev.size;
                break;
            case 0:
                x = prev.x - size;
                y = prev.y - prev2.size;
                break;
            case 1:
                x = prev.x;
                y = prev.y - size;
                break;
        }
    }

    const square = {
        x: x,
        y: y,
        size: size || 10,
        color: colors[squareCount % colors.length]
    };

    squares.push(square);
    drawSquare(square.x, square.y, square.size, square.color);
    squareCount++;
}

document.getElementById('toggleButton').addEventListener('click', () => {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
        document.getElementById('toggleButton').innerText = 'Start';
    } else {
        intervalId = setInterval(nextSquare, 1000);
        document.getElementById('toggleButton').innerText = 'Stop';
    }
});

