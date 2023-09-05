import type { TyleProps } from '../../types/interfaces'
import { TURNS } from '../../types/enums'

const Tile: React.FC<TyleProps> = ({ children, updateBoard, index }) => {
  const handleClick = () => {
    updateBoard(index)
  }
  return (
    <div className={`tile ${children === TURNS.X ? 'green' : children === TURNS.O ? 'yellow' : ''}`} onClick={handleClick}>
        { children }
    </div>
  )
}

export default Tile
