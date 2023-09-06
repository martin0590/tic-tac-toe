import type { BoardInfo } from '../../types/interfaces'
import ResetButton from '../resetbutton/ResetButton'

const BoardInformation: React.FC<BoardInfo> = ({ turn, resetGame }) => {
  return (
  <section className='board-information'>
      <div className='turn'>{turn}<span className='turn-span'>TURN</span></div>
      <ResetButton resetGame={resetGame}/>
  </section>
  )
}

export default BoardInformation
