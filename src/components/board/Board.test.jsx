import { cleanup, fireEvent, render, renderHook, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import useBoard from '../../hooks/useBoard'
import Tile from '../tile/Tile'
import Board from './Board'

describe('Board', () => {
  afterEach(cleanup)

  it('should render board', () => {
    const { result } = renderHook(() => useBoard())

    render(<Board board={result.current.board} updateBoard={result.current.updateBoard}/>)

    expect(result.current.board).toStrictEqual(Array(9).fill(null))
  })

  it('should allow me to click on tile and display the X', async () => {
    const { result } = renderHook(() => useBoard())

    render(<Tile index={3} updateBoard={() => { result.current.updateBoard(3) }} >{result.current.board[3]}</Tile>)

    fireEvent.click(await screen.findByTestId('tile-3'))

    expect(result.current.board[3]).toBe('X')
  })
})
