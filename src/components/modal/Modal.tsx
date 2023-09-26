import type { ModalProps } from '../../types/interfaces'
import './modal.style.css'

const Modal = ({ isModalOpen, handleQuitBtn, turn, winner, isDraw, resetGame }: ModalProps) => {
  return (
    isModalOpen && (
      <div id="myModal" className="modal" data-testid='modal-test'>
        <div className="modal-content">
          {winner && <h6 className='who-won'>YOU WON</h6>}
            {isDraw && <h1 className='modal-draw'> IT&apos;S A DRAW</h1>}
            {winner && <div className='modal-winner'><span>{turn}</span><p>TAKES THE ROUND</p></div>}
          <div className='modal-btn-container'>
            <button className="quit-modal-btn" onClick={handleQuitBtn}>QUIT</button>
            <button className='modal-next-round-btn' onClick={() => { resetGame() }}>NEXT ROUND</button>
          </div>
        </div>
      </div>
    )
  )
}

export default Modal
