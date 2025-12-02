import { useState } from 'react'
import './App.css'
import { Square } from './components/Square.jsx'
import {TURNS, WINNERPOSITIONS} from './constans.js';
import { WinnerModal } from './components/WinnerModal.jsx'


function App() {
  const [board, setBoard] = useState(() => {
  const boardFromStorage = window.localStorage.getItem('board')
  if (boardFromStorage) return JSON.parse(boardFromStorage)
  return Array(9).fill(null)
  })

  const [turn, setTurn] = useState(() => {
  const turnFromStorage = window.localStorage.getItem('turn')
  return turnFromStorage ?? TURNS.x
  })
  const [winner, setWinner] =useState(null)

  const winnerCheck = (boardToCheck) => {
    for (const combo of WINNERPOSITIONS) {
      if ((boardToCheck[combo[0]] !== null) &&
      (boardToCheck[combo[0]] === boardToCheck[combo[1]]) &&
      (boardToCheck[combo[0]] === boardToCheck[combo[2]])){
        let newWinner = boardToCheck[combo[0]];
          console.log(newWinner);
          return newWinner
          
      }
    }

    if (boardToCheck.every(square => square !== null)) return false
    return null
  }

  const  updateBoard = (index) => {
    if (board[index] || winner) return;
    let newTurn = (turn === TURNS.x)? TURNS.o: TURNS.x;
    let newBoard = [... board];
    newBoard[index] = turn;
    const newWinner = winnerCheck(newBoard);
    setBoard(newBoard);
    setWinner(newWinner);
    setTurn(newTurn);
    //guardar partida
    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('Turn', JSON.stringify(newTurn))
    window.localStorage.setItem('Winner', JSON.stringify(newWinner ))
    
  }

  const resetGame =() => {
    let newBoard = Array(9).fill(null);
    let newWinner = null;
    let newTurn = TURNS.x;
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')

    setBoard(newBoard);
    setTurn(newTurn);
    setWinner(newWinner);
  }

  return (
    <main className='board'>
      <h1> tic tac toe</h1>
      <button onClick={resetGame}>reset Game</button>
      <section className='game'>
        {
          board.map((_,index) => {
            return (
              <Square
              key={index}
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
      <WinnerModal resetGame={resetGame} winner={winner} />
    </main>
  )
}

export default App
