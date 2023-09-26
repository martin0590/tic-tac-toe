import { fireEvent, render, renderHook, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import useBoard from '../../hooks/useBoard'
import BoardInformation from '../boardinformation/BoardInformation'
import Board from '../board/Board'

describe('board-information', () => {
  it('resets board', () => {
    const { result } = renderHook(() => useBoard())
    const boardState = [null, null, 'X', 'O', 'X', 'O', 'O', 'O', null]
    const resetState = [null, null, null, null, null, null, null, null, null]

    render(
    <div>
      <BoardInformation resetGame={result.current.resetGame}/>
      <Board board={boardState}/>
    </div>)

    const resetBtn = screen.getByRole('button')
    fireEvent.click(resetBtn)
    expect(result.current.board).toEqual(resetState)
  }
  )
})
