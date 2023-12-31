const gameBoard =document.querySelector(".game-board");
const scoreElement = document.querySelector(".score");
const highScoreElement = document.querySelector(".high-score");

let foodX, foodY;
let snakeX = 15, snakeY = 15;
let velocityX = 0, velocityY = 0;
let snakeBody = [];
gameOver = false;
let setIntervalID;
let score = 0;
let highScore = localStorage.getItem("high-score") || 0;

const changeFoodXY = () => {
    foodX = Math.floor(Math.random() * 30) + 1;
    foodY = Math.floor(Math.random() * 30) + 1;
}

const handleGameOver = () => {
    clearInterval(setIntervalID);
    alert("Game Over!");
    
    highScore = score >= highScore ? score : highScore;
    localStorage.setItem("high-score", highScore);
    location.reload();
}

const changeDirection = (e) => {
    //console.log(e);
    if(e.key === "ArrowUp" && velocityY != 1) {
        velocityX = 0;
        velocityY = -1;
    } else if(e.key === "ArrowDown" && velocityY != -1) {
        velocityX = 0;
        velocityY = 1;
    } else if(e.key === "ArrowRight" && velocityX != -1) {
        velocityX = 1;
        velocityY = 0;
    } else if(e.key === "ArrowLeft" && velocityX != 1) {
        velocityX = -1;
        velocityY = 0;
    }
    // initGame();
}

const initGame = () => {
    if (gameOver) return handleGameOver();
    let htmlMarkup = `<div class="food" style="grid-area: ${foodY} / ${foodX}"></div>`
    highScoreElement.innerHTML = `RECORD: ${highScore}`;
    
    if(snakeX === foodX && snakeY === foodY) {
        changeFoodXY();
        snakeBody.push([foodX, foodY]);
        //console.log(snakeBody);
        score++;

    }

    for(let i = snakeBody.length - 1; i > 0; i--) {
        snakeBody[i] = snakeBody[i - 1];
    }

    snakeBody[0] = [snakeX, snakeY];

    if(snakeX <= 0 || snakeX > 30 || snakeY <= 0 || snakeY > 30) {
        gameOver = true;
    }

    snakeX += velocityX;
    snakeY += velocityY;

    for(let i = 0; i < snakeBody.length; i++) {
        htmlMarkup += `<div class="head" style="grid-area: ${snakeBody[i][1]} / ${snakeBody[i][0]}"></div>`;
        if(i !== 0 && snakeBody[0][1] === snakeBody[i][1] && snakeBody[0][0] === snakeBody[i][0]) {
            gameOver = true;
        }
    }
    gameBoard.innerHTML = htmlMarkup;
    scoreElement.innerHTML = `Score: ${score}`;

}

changeFoodXY();
// initGame();
setIntervalID = setInterval(initGame, 125);
document.addEventListener("keydown", changeDirection);