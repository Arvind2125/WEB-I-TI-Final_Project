const gameBoard = document.getElementById('game-board');
const paddleLeft = document.getElementById('paddle-left');
const paddleRight = document.getElementById('paddle-right');
const ball = document.getElementById('ball');
const scoreDisplay = document.getElementById('score');

let ballSpeedX = 4;
let ballSpeedY = 4;
let ballPosX = gameBoard.clientWidth / 2 - 10;
let ballPosY = gameBoard.clientHeight / 2 - 10;
let paddleLeftY = gameBoard.clientHeight / 2 - 40;
let paddleRightY = gameBoard.clientHeight / 2 - 40;
let player1Score = 0;
let player2Score = 0;

function updateGame() {
    ballPosX += ballSpeedX;
    ballPosY += ballSpeedY;

    if (ballPosY <= 0 || ballPosY >= gameBoard.clientHeight - 20) {
        ballSpeedY = -ballSpeedY;
    }

    if (ballPosX <= 20 && ballPosY >= paddleLeftY && ballPosY <= paddleLeftY + 80) {
        ballSpeedX = -ballSpeedX;
    } else if (ballPosX >= gameBoard.clientWidth - 30 && ballPosY >= paddleRightY && ballPosY <= paddleRightY + 80) {
        ballSpeedX = -ballSpeedX;
    } else if (ballPosX <= 0) {
        player2Score++;
        resetBall();
    } else if (ballPosX >= gameBoard.clientWidth) {
        player1Score++;
        resetBall();
    }

    ball.style.left = ballPosX + 'px';
    ball.style.top = ballPosY + 'px';
    scoreDisplay.innerText = `Player 1: ${player1Score} | Player 2: ${player2Score}`;
}

function resetBall() {
    ballPosX = gameBoard.clientWidth / 2 - 10;
    ballPosY = gameBoard.clientHeight / 2 - 10;
    ballSpeedX = -ballSpeedX;
}

document.addEventListener('mousemove', (event) => {
    const mouseY = event.clientY - gameBoard.getBoundingClientRect().top;
    paddleLeftY = mouseY - 40;
    paddleRightY = mouseY - 40;
    paddleLeft.style.top = paddleLeftY + 'px';
    paddleRight.style.top = paddleRightY + 'px';
});

setInterval(updateGame, 1000 / 60);