import {WINNERPOSITIONS, TURNS} from '../constans.js';

const winnerCheck = (boardToCheck) => {
    WINNERPOSITIONS.forEach(element => {
      if (boardToCheck[element[0]] !== null && 
        (boardToCheck[element[0]] === boardToCheck[element[1]]) &&
         (boardToCheck[element[0]] === boardToCheck[element[2]])) 
        {
          let newWinner = boardToCheck[element[0]];
          setWinner(newWinner);
        
      }
    });

    if (boardToCheck.every(square => square !== null)) {
      let newWinner = false;
      setWinner(newWinner)
      console.log(newWinner)
    }
  }

export const  updateBoard = (index) => {
if (board[index] || winner) return;
let newTurn = (turn === TURNS.x)? TURNS.o: TURNS.x;
let newBoard = [... board];
newBoard[index] = turn;
setBoard(newBoard);
winnerCheck(newBoard);
setTurn(newTurn);

}

export const resetGame =() => {
let newBoard = Array(9).fill(null);
let newWinner = null;
let newTurn = TURNS.x;

setBoard(newBoard);
setTurn(newTurn);
setWinner(newWinner);
}