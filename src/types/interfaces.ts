import { type ReactNode } from 'react'
import type { TURNS } from './enums'
import type { BoardArray } from './types'

export interface TyleProps {
  index: number
  children: ReactNode
  updateBoard: (index: number) => void
}

export interface ModalProps {
  setIsModalOpen?: (state: boolean) => void
  isModalOpen: boolean
  handleQuitBtn: () => void
  turn: TURNS
  resetGame: () => void
  winner: boolean
  isDraw: boolean
}

export interface ResetButtonProps {
  resetGame: () => void
}

export interface BoardInfo {
  resetGame: () => void
  turn: TURNS
}

export interface IBoard {
  updateBoard: (index: number) => void
  board: BoardArray
}

export interface IResetButton {
  resetGame: () => void
}
