import type { BoardInfo } from '../../types/interfaces'
import ResetButton from '../resetbutton/ResetButton'
import './boardInformation.style.css'

const BoardInformation: React.FC<BoardInfo> = ({ turn, resetGame }) => {
  return (
  <section className='board-information'>
      <div className='turn'>{turn}<span className='turn-span'>TURN</span></div>
      <ResetButton resetGame={() => { resetGame('reset') }}/>
  </section>
  )
}

export default BoardInformation
