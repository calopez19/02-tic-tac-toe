import './App.css'

interface Diccionario {
    X: string;
    O: string // Clave string, Valor string
}

function App() {
  const TURN: Diccionario = {
    X: 'x',
    O: 'O'
  }
  const board: Array<null | Number> = Array(9).fill(null)
  return (
    <main className='board'>
      <h1>tic tac toe {TURN.X}</h1>
      <section className='game'>
        {board.map((_, index) => {
          return (
            <div className='cell' key={index}>
              <span className='cell_content'>
                {index}
              </span>
            </div>
          )
        })}
      </section>
    </main>
  )
}

export default App
