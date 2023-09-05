import type { ModalProps } from '../../types/interfaces'
import './modal.style.css'

const Modal = ({ turn, setIsModalOpen, resetGame, winner, isDraw }: ModalProps) => {
  const handleQuitBtn = () => {
    setIsModalOpen(false)
  }
  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
          {winner && <h6 className='who-won'>YOU WON</h6>}
            {isDraw && <h1 className='modal-draw'> IT&apos;S A DRAW</h1>}
            {/* {winner && <h1 className='modal-winner'><span>{turn}</span><p>TAKES THE ROUND</p></h1>} */}
            {winner && <div className='modal-winner'><span>{turn}</span><p>TAKES THE ROUND</p></div>}
          <div className='modal-btn-container'>
            <button className="quit-modal-btn" onClick={handleQuitBtn}>QUIT</button>
            <button className='modal-next-round-btn' onClick={resetGame}>NEXT ROUND</button>
          </div>
      </div>
    </div>
  )
}

export default Modal