import React from 'react'
import { ResetIcon } from '../../icons/ResetIcon'
import type { IResetButton } from '../../types/interfaces'
import './resetButton.style.css'

const ResetButton: React.FC<IResetButton> = ({ resetGame }) => {
  return (
    <button className='reset-button' onClick={resetGame}>
      <ResetIcon />
    </button>
  )
}

export default ResetButton
