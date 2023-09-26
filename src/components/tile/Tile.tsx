import { TURNS } from '../../types/enums'
import type { TyleProps } from '../../types/interfaces'
import './tile.style.css'

const Tile: React.FC<TyleProps> = ({ children, index, updateBoard }) => {
  return (
    <div className={`tile ${children === TURNS.X ? 'green' : children === TURNS.O ? 'yellow' : ''}`} data-testid={`tile-${index}`} onClick={() => { updateBoard(index) }}>
        { children }
    </div>
  )
}

export default Tile
