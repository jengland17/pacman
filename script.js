
var world = [                // 0 = brick, 1 = coin, 2 = empty
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 2, 1, 1, 0, 0, 1, 3, 0],
    [0, 1, 2, 1, 0, 0, 1, 2, 1, 0],
    [0, 1, 2, 0, 0, 1, 2, 1, 1, 0],
    [0, 2, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 2, 1, 0, 0, 2, 2, 1, 0],
    [0, 1, 2, 1, 0, 0, 1, 1, 1, 0],
    [0, 2, 1, 2, 1, 2, 2, 3, 1, 0],
    [0, 1, 1, 1, 0, 0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

var score = 0;
console.log('Score =', score);

var lives = 3;

function drawWorld() {

    var output = '';

    for (var i = 0; i < world.length; i++) {

        output += "<div class='row'>";

        for (var j = 0; j < world[i].length; j++) {

            if (world[i][j] == 0) {
                output += "<div class='brick'></div>";
            }
            if (world[i][j] == 1) {
                output += "<div class='coin'></div>";
            }
            if (world[i][j] == 2) {
                output += "<div class='empty'></div>"
            }
            if (world[i][j] == 3) {
                output += "<div class='cherry'></div>"
            }
        }

        output += "</div>";
    }
    document.getElementById('world').innerHTML = output;
}
drawWorld();

var pacman = {  // the coordinates at which pacman starts
    x: 1,
    y: 1
}

function drawPacman() {
    document.getElementById('pacman').style.top = pacman.y * 40 + 'px';

    document.getElementById('pacman').style.left = pacman.x * 42 + 'px';
}

drawPacman();

var red = {
    x: 8,
    y: 8
}


function drawRed() {
    document.getElementById('red').style.top = red.y * 40 + 'px';

    document.getElementById('red').style.left = red.x * 42 + 'px';
}

drawRed();

function moveRed() { //the only I thing I could not figure out is how to move the ghost

}


function displayScore() {
    document.getElementById('score').innerHTML = score;
}

displayScore();

function displayLives() {
    document.getElementById('lives').innerHTML = lives;
}

displayLives();


document.onkeydown = function (e) {

    if (e.keyCode == 37) { //LEFT

        if (world[pacman.y][pacman.x - 1] !== 0) {
            pacman.x--;
        }
    }

    if (e.keyCode == 39) { //RIGHT
        if (world[pacman.y][pacman.x + 1] !== 0) {
            pacman.x++;
        }
    }

    if (e.keyCode == 38) { //UP
        if (world[pacman.y - 1][pacman.x] !== 0) {
            pacman.y--;
        }
    }

    if (e.keyCode == 40) { // DOWN
        if (world[pacman.y + 1][pacman.x] !== 0) {
            pacman.y++;
        }
    }

    if (world[pacman.y][pacman.x] === 1) { // 1 = coin; 2 = empty block
        world[pacman.y][pacman.x] = 2; // once pacman goes over the coin it becomes and empty block by setting it equal to 2 
        score += 10;                  // It also adds a score of 10 each time he goes over a coin
        console.log("Score = " + score);
    }

    if (world[pacman.y][pacman.x] === 3) {
        world[pacman.y][pacman.x] = 2;
        score += 50;
        console.log("Score =" + score);
    }

    if ((pacman.x === red.x) && (pacman.y === red.y)) {
        lives -= 1;
        console.log("lives= " + lives)
    }
    if (lives === 0) {
        document.write("Game Over! </br> Your Score= " + score)
    }

    drawWorld();
    drawPacman();
    displayScore();
    displayLives();
}
