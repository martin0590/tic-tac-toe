import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Board from '../board/Board'
import Scores from './Scores'

describe('scores', () => {
  it('should increment score if player win', async () => {
    const winBoard = ['X', 'X', 'X', 'O', 'O', 'O', null, null, null]
    const scores = {
      X: 2,
      O: 0,
      ties: 0
    }

    // Render the Board component with the useBoard hook
    render(
    <div>
      <Board board={winBoard} updateBoard={() => {}} />
      <Scores score={scores}/>
    </div>)

    const tile = screen.getByTestId('tile-0')
    fireEvent.click(tile)
    const scoreEl = screen.getByTestId('score-X')

    expect(scoreEl.textContent).toBe('2')
  })
})
