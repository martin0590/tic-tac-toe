import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import Modal from './Modal'

describe('Modal', () => {
  afterEach(cleanup)

  it('should show Modal if isModalOpen is true', () => {
    const isModalOpen = true
    render(<Modal isModalOpen={isModalOpen} />)

    const btnQuit = screen.getByText('QUIT')
    expect(btnQuit).toBeDefined()
  })

  it('should not show Modal if isModalOpen is false', () => {
    const isModalOpen = false
    render(<Modal isModalOpen={isModalOpen} />)

    expect(screen.queryByTestId('modal-test')).toBeNull()
    screen.debug()
  })
})
