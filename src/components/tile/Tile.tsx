import { TURNS } from '../../types/enums'
import type { TyleProps } from '../../types/interfaces'

const Tile: React.FC<TyleProps> = ({ children, index, updateBoard }) => {
  return (
    <div className={`tile ${children === TURNS.X ? 'green' : children === TURNS.O ? 'yellow' : ''}`} onClick={() => { updateBoard(index) }}>
        { children }
    </div>
  )
}

export default Tile
