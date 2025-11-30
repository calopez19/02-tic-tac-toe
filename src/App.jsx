import { useState } from 'react'
import './App.css'
import { Square } from './components/Square.jsx'


const TURNS = {
  x: 'X',
  o: 'O'
}

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.x)

  const  updateBoard = (index) => {
    let newTurn = (turn === TURNS.x)? TURNS.o: TURNS.x;
    let newBoard = [... board];
    newBoard[index] = turn;
    setBoard(newBoard);
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
