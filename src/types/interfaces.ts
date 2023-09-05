import { type ReactNode } from 'react'
import type { TURNS } from './enums'

export interface TyleProps {
  updateBoard: (index: number) => void
  index: number
  children: ReactNode
}

export interface ModalProps {
  setIsModalOpen: (state: boolean) => void
  turn: TURNS
  resetGame: () => void
  winner: boolean
  isDraw: boolean
}
