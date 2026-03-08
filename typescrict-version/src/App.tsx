import './App.css'
import { ResetButton } from './components/ResetButton';
import { Square } from './components/Square';
import { useState } from 'react';
interface Diccionario {
    X: string;
    O: string // Clave string, Valor string
}const TURN: Diccionario = {
    X: 'x',
    O: 'O'
  }

function App() {
const [turn, setTurn] = useState<string>(TURN.X)
const [board, setBoard] = useState<Array<null | string>>(Array(9).fill(null))
function updateBoard(index: number) {
  if (board[index] !== null) return
  const newTurn: string = (turn === TURN.X)? TURN.O : TURN.X
  const newBoard: (string | null)[] = [...board]
  newBoard[index] = turn
  setBoard(newBoard)
  setTurn(newTurn)
}

  return (
    <main className='board'>
      <h1>tic tac toe</h1>
      <ResetButton/>
      <section className='game'>
        {board.map((_, index) => {
          return (
            <Square index={index} onclick={updateBoard} key={index}>
              {board[index]}
            </Square>
          )
        })}
      </section>
      <section style={{marginTop:'20px', display:'flex', flexDirection: 'row', justifyContent: 'center', gap: '10px'}}>
        <Square index={-1} onclick={updateBoard} turn={(turn === TURN.X)}>
            {TURN.X}
        </Square>
        <Square index={-1} onclick={updateBoard} turn={(turn === TURN.O)}>
            {TURN.O}
        </Square>
      </section>
    </main>
  )
}

export default App
