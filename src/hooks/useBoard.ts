import { useState } from 'react'
import { TURNS, DIFFICULTY } from '../types/enums'
import type { BoardArray } from '../types/types'
import type { ScorePoints } from '../types/interfaces'
import { WOMBO_COMBOS } from '../constants/combos'

const scores: ScorePoints = {
  X: 0,
  O: 0,
  ties: 0
}

const useBoard = () => {
  const [board, setBoard] = useState<BoardArray>(Array(DIFFICULTY.NORMAL).fill(null))
  const [turn, setTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isDraw, setisDraw] = useState(false)
  const [score, setScore] = useState(scores)

  const updateBoard = (index: number) => {
    if (board[index] !== null || winner) return
    const newBoard: BoardArray = [...board]
    newBoard[index] = turn
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X

    const noMoreMoves = checkDraw(newBoard)
    const checkIfWinner = checkWinner(newBoard)

    if (checkIfWinner) {
      setWinner(true)
      setScore(prevScore => ({ ...prevScore, X: prevScore.X + 2 }))
      setIsModalOpen(true)
    } else if (noMoreMoves) {
      setisDraw(true)
      setScore(prevScore => ({ ...prevScore, O: prevScore.O + 1, ties: prevScore.ties + 1, X: prevScore.X + 1 }))
      setIsModalOpen(true)
    } else if (turn !== newTurn) {
      const newIdx: number = checkCPUIdx(newBoard)
      newBoard[newIdx] = newTurn
      const checkIfWinner = checkWinner(newBoard)
      if (checkIfWinner) {
        setWinner(true)
        setScore(prevScore => ({ ...prevScore, O: prevScore.O + 2 }))
        setIsModalOpen(true)
        setTurn(TURNS.O)
      }
    } else {
      setTurn(TURNS.X)
    }
    setBoard(newBoard)
  }

  function getEmptyIndices (boardToCheck: BoardArray): number[] {
    const emptyIndices: number[] = []
    for (let i = 0; i < boardToCheck.length; i++) {
      if (boardToCheck[i] === null) {
        emptyIndices.push(i)
      }
    }
    return emptyIndices
  }

  const checkCPUIdx = (boardToCheck: BoardArray): number => {
    const emptyIndices = getEmptyIndices(boardToCheck)
    const newBoard = [...boardToCheck]
    for (const emptyIdx of emptyIndices) {
      newBoard[emptyIdx] = TURNS.O
      if (checkWinner(newBoard)) {
        return emptyIdx
      }
    }
    const randomIndex = Math.floor(Math.random() * (emptyIndices.length))
    return emptyIndices[randomIndex]
  }

  const checkWinner = (boardToCheck: BoardArray) => {
    for (const combo of WOMBO_COMBOS) {
      const [a, b, c] = combo

      if (boardToCheck[a] !== null && boardToCheck[b] !== null && boardToCheck[c] !== null) {
        if (boardToCheck[a] === boardToCheck[b] && boardToCheck[a] === boardToCheck[c]) {
          return true
        }
      }
    }
    return false
  }

  const checkDraw = (boardToCheck: BoardArray): boolean => {
    return boardToCheck.every(tile => tile !== null)
  }

  const resetGame = (reset?: string) => {
    if (reset === 'reset') {
      setScore(scores)
    }
    setBoard(Array(DIFFICULTY.NORMAL).fill(null))
    setTurn(TURNS.X)
    setWinner(false)
    setisDraw(false)
    setIsModalOpen(false)
  }

  const handleBoard = (index: number) => {
    updateBoard(index)
  }

  const handleQuitBtn = () => {
    setIsModalOpen(false)
  }

  return {
    resetGame,
    turn,
    isDraw,
    isModalOpen,
    updateBoard,
    handleBoard,
    board,
    handleQuitBtn,
    winner,
    score

  }
}

export default useBoard
