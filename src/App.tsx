import './App.css'
import Modal from './components/modal/Modal'
import BoardInformation from './components/boardinformation/BoardInformation'
import Board from './components/board/Board'
import useBoard from './hooks/useBoard'

function App () {
  const { isModalOpen, handleQuitBtn, isDraw, winner, turn, board, updateBoard, resetGame } = useBoard()
  console.log(resetGame)
  return (
    <div className='container'>
      <BoardInformation turn={turn} resetGame={resetGame}/>
      <Board board={board} updateBoard={updateBoard} />
      <Modal isModalOpen={isModalOpen} handleQuitBtn={handleQuitBtn} turn={turn} winner={winner} isDraw={isDraw} resetGame={resetGame} />
    </div>
  )
}

export default App
