import { useState } from 'react'
import './App.css'
import Tile from './components/tile/Tile'
import { TURNS } from './types/enums'
import ResetButton from './components/resetbutton/ResetButton'
import Modal from './components/modal/Modal'

const WOMBO_COMBOS = [
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
  [0, 1, 2],
  [0, 3, 6],
  [1, 4, 7],
  [0, 4, 8]
]
type BoardArray = Array<string | null>

function App () {
  const [board, setBoard] = useState<BoardArray>(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isDraw, setisDraw] = useState(false)

  const updateBoard = (index: number) => {
    if (board[index] !== null || winner) return
    const newBoard: BoardArray = [...board]
    newBoard[index] = turn
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X

    const noMoreMoves = checkDraw(newBoard)
    const checkIfWinner = checkWinner(newBoard)

    if (checkIfWinner) {
      setWinner(true)
      setIsModalOpen(true)
    } else if (noMoreMoves) {
      setisDraw(true)
      setIsModalOpen(true)
    } else if (turn !== newTurn) {
      const newIdx: number = checkCPUIdx(newBoard)
      newBoard[newIdx] = newTurn
      const checkIfWinner = checkWinner(newBoard)
      if (checkIfWinner) {
        setWinner(true)
        setIsModalOpen(true)
        setTurn(TURNS.O)
      }
    } else {
      setTurn(TURNS.X)
    }
    setBoard(newBoard)
  }

  function getEmptyIndices (boardToCheck: BoardArray): number[] {
    const emptyIndices: number[] = []
    for (let i = 0; i < boardToCheck.length; i++) {
      if (boardToCheck[i] === null) {
        emptyIndices.push(i)
      }
    }
    return emptyIndices
  }

  const checkCPUIdx = (boardToCheck: BoardArray): number => {
    const emptyIndices = getEmptyIndices(boardToCheck)
    const newBoard = [...boardToCheck]
    for (const emptyIdx of emptyIndices) {
      newBoard[emptyIdx] = TURNS.O
      if (checkWinner(newBoard)) {
        return emptyIdx
      }
    }
    const randomIndex = Math.floor(Math.random() * (emptyIndices.length))
    return emptyIndices[randomIndex]
  }

  const checkWinner = (boardToCheck: BoardArray) => {
    for (const combo of WOMBO_COMBOS) {
      const [a, b, c] = combo

      if (boardToCheck[a] !== null && boardToCheck[b] !== null && boardToCheck[c] !== null) {
        if (boardToCheck[a] === boardToCheck[b] && boardToCheck[a] === boardToCheck[c]) {
          return true
        }
      }
    }
    return false
  }

  const checkDraw = (boardToCheck: BoardArray): boolean => {
    return boardToCheck.every(tile => tile !== null)
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(false)
    setisDraw(false)
    setIsModalOpen(false)
  }

  return (
    <div className='container'>
      <section className='board-information'>
        <div className='turn'>{turn}<span className='turn-span'>TURN</span></div>
        <ResetButton resetGame={resetGame} />
      </section>

      <section className='board'>
        {
          board.map((_, index) => (
            <Tile key={index}
                  index={index}
                  updateBoard={updateBoard}>
              {board[index]}
            </Tile>
          ))
        }
      </section>

      {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} isDraw={isDraw} winner={winner} turn={turn} resetGame={resetGame}/>}
    </div>
  )
}

export default App
