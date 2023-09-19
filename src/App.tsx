import './App.css'
import Modal from './components/modal/Modal'
import BoardInformation from './components/boardinformation/BoardInformation'
import Board from './components/board/Board'
import useBoard from './hooks/useBoard'
import Scores from './components/scores/Scores'

function App () {
  const { isModalOpen, handleQuitBtn, isDraw, winner, turn, board, updateBoard, resetGame, score } = useBoard()
  return (
    <div className='container'>
      <div className='section-container'>
        <BoardInformation turn={turn} resetGame={resetGame}/>
        <Board board={board} updateBoard={updateBoard} />
        <Scores score={score} />
      </div>
        <Modal isModalOpen={isModalOpen} handleQuitBtn={handleQuitBtn} turn={turn} winner={winner} isDraw={isDraw} resetGame={resetGame} />
    </div>
  )
}

export default App
