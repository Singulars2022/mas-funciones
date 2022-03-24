function mazeRunner(maze, directions) {

    let N = maze[0].length;
    let mazeFlat = maze.flat();

    // where is the player
    let startPlayer = mazeFlat.findIndex(x => x == 2);

    let xPos = startPlayer % N;
    let yPos = Math.floor(startPlayer / N);

    for (let i = 0; i < directions.length; i++) {

        console.log(`Next move is ${maze[yPos][xPos]}`);
        switch (directions[i]) {
            case 'E':
                xPos++;
                break;
            case 'W':
                xPos--;
                break;
            case 'N':
                yPos--;
                break;
            case 'S':
                yPos++;
                break;
        }

        // did I win?
        if (maze[yPos][xPos] == 3) {
            return "Finish";
        }

        if (xPos == -1 || xPos == N || yPos == -1 || yPos == N || maze[yPos][xPos] == 1) {
            return "Dead";
        }
    }
    return "Lost";


}

var maze = [[1, 1, 1, 1, 1, 1, 1],
[1, 0, 0, 0, 0, 0, 3],
[1, 0, 1, 0, 1, 0, 1],
[0, 0, 1, 0, 0, 0, 1],
[1, 0, 1, 0, 1, 0, 1],
[1, 0, 0, 0, 0, 0, 1],
[1, 2, 1, 0, 1, 0, 1]];

console.log(mazeRunner(maze, ["N", "N", "N", "N", "N", "E", "E", "S", "S", "E", "E", "N", "N", "E"]), "Finish", "Expected Finish");


// console.log(mazeRunner(maze, ["N", "N", "N", "N", "N", "E", "E", "E", "E", "E"]), "Finish");

// console.log(mazeRunner(maze, ["N", "N", "N", "W", "W"]), "Dead");


// console.log(mazeRunner(maze, ["N", "N", "N", "N", "N", "E", "E", "S", "S", "S", "S", "S", "S"]), "Dead", "Expected Dead");

// console.log(mazeRunner(maze, ["N", "E", "E", "E", "E"]), "Lost");

