from array import *
from numpy.random import randint

def printBoard(board):
    a = board

    for i in range(len(a)) : 
        for j in range(len(a[i])) : 
            print(a[i][j], end=" ")
        print()

def placeMines(board, amount):
    rows = len(board)
    cols = len(board[0])
    #print(rows, "x", cols)
    for x in range(amount):
        randRow = int(randint(0,rows - 1))
        randCol = int(randint(0,cols - 1))
        #print("placing mine in (", randRow, ", ", randCol, ")")
        board[randRow][randCol] = 1
    return board
        

def calcDistance(board):
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

rows = 8
cols = 16

mines = [[0 for i in range(cols)] for j in range(rows)]
print("printing empty mines board")
printBoard(mines)

mines = placeMines(mines, 20)
print("printing placed mines")
printBoard(mines)
distance = calcDistance(mines)
print("printing distance")
printBoard(distance)

