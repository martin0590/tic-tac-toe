import './scores.style.css'
import type { ScorePoints } from '../../types/interfaces'

const Scores = ({ score }: { score: ScorePoints }) => {
  return (
    <section className="scores">
      <div className='scores-x'>
        <span>X (YOU)</span>
        <span className='score-number' data-testid='score-X'>{score.X}</span>
      </div>
      <div className='scores-ties'>
        <span>TIES</span>
        <span className='score-number'>{score.ties}</span>
      </div>
      <div className='scores-O'>
        <span>O (CPU)</span>
        <span className='score-number'>{score.O}</span>
      </div>
    </section>
  )
}

export default Scores
