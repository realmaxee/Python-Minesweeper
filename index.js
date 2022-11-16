function printBoard(board) {
    a = board;
    html = "";
    for(i = 0; i < a.length; i++) {
        for(j = 0; j < a[0].length; j++) {
            html += a[i][j];
            html += " ";
        }
        console.log(html);
        html = "";
    }
        
}
    

function placeMines(board, amount) {
    rows = board.length;
    cols = board[0].length;
    //print(rows, "x", cols)
    for(x = 0; x < amount; x++) {
        randRow = int(Math.random() * (rows - 1)); 
        randCol = int(Math.random() * (cols - 1)); 
        console.log("placing mine in (" + randRow + ", " +  randCol +")");
        board[randRow][randCol] = 1;
    }



    Math.random();
        
    return board;
}
    
        
/*
function calcDistance(board){
    rows =len(board)
    cols = len(board[0])
    distance = [[0 for i in range(cols)] for j in range(rows)]
    error = 0

    for row in range(rows - 0):
        for col in range(cols - 0):
            r = row + 0
            c = col + 0
            if (board[r][c] == 0):
                try:
                    distance[r][c] += board[r-1][c-1]
                except:
                    error += 1
                try:
                    distance[r][c] += board[r-1][c]
                except:
                    error += 1
                try:
                    distance[r][c] += board[r-1][c+1]
                except:
                    error += 1
                try:
                    distance[r][c] += board[r][c-1]
                except:
                    error += 1
                try:
                    distance[r][c] += board[r][c+1]
                except:
                    error += 1
                try:
                    distance[r][c] += board[r+1][c-1]
                except:
                    error += 1
                try:
                    distance[r][c] += board[r+1][c]
                except:
                    error += 1
                try:
                    distance[r][c] += board[r+1][c+1]
                except:
                    error += 1
                    
                #distance[r][c] += board[r-1][c-1] + board[r-1][c] + board[r-1][c+1]#add top row
                #distance[r][c] += board[r][c-1] + board[r][c+1]#add side values
                #distance[r][c] += board[r+1][c-1] + board[r+1][c] + board[r+1][c+1]#add below row
            else:
                distance[r][c] = "X"
    return distance
}
*/

rows = 8;
cols = 16;

mines = [
    [1,0,0,0,0,0,0,0],
    [0,0,0,1,0,0,0,0],
    [0,0,0,0,0,1,0,0],
    [0,1,0,0,0,0,0,0],
];
printBoard(mines);
mines = placeMines(mines, 5);
printBoard(mines);


