import type { IBoard } from '../../types/interfaces'
import Tile from '../tile/Tile'

const Board: React.FC<IBoard> = ({ board, updateBoard }) => {
  return (
    <section className='board'>
    {
      board.map((_, index) => (
        <Tile key={index}
              index={index}
              updateBoard={updateBoard}
      >
          {board[index]}
        </Tile>
      ))
    }
    </section>
  )
}

export default Board
