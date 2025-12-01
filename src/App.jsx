import { useState } from 'react'
import './App.css'
import { Square } from './components/Square.jsx'


const TURNS = {
  x: 'X',
  o: 'O'
}

const WINNERPOSITIONS = [
  // Rows
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  // Columns
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  // Diagonals
  [0, 4, 8],
  [2, 4, 6]
]

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.x)
  const [winner, setWinner] =useState(null)

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
      
  }


  const  updateBoard = (index) => {
    if (board[index] || winner) return;
    let newTurn = (turn === TURNS.x)? TURNS.o: TURNS.x;
    let newBoard = [... board];
    newBoard[index] = turn;
    setBoard(newBoard);
    winnerCheck(newBoard);
    setTurn(newTurn);

  }

  return (
    <main className='board'>
      <h1> tic tac toe</h1>
      <section className='game'>
        {
          board.map((_,index) => {
            return (
              <Square
              index={index}
              updateBoard={updateBoard}>
                {board[index]}
              </Square>
            )
          })
        }
      </section>
      <section className='turn'>
        <Square isSelected= {turn === TURNS.x}>
          {TURNS.x}
        </Square>
        <Square isSelected= {turn === TURNS.o}>
          {TURNS.o}
        </Square>
      </section>
    </main>
  )
}

export default App
