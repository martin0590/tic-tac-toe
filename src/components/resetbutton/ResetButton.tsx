import { ResetIcon } from '../icons/ResetIcon'
import type { ResetButtonProps } from '../../types/types'
import React from 'react'

const ResetButton: React.FC<ResetButtonProps> = ({ resetGame }) => {
  const handleReset = () => {
    resetGame()
  }

  return (
    <button className='reset-button' onClick={handleReset}>
      <ResetIcon />
    </button>
  )
}

export default ResetButton
