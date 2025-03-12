import { render } from '@redwoodjs/testing/web'
import { screen } from '@redwoodjs/testing/web'

import { Loading, Success } from './EditUserProfileCell'
import { standard } from './EditUserProfileCell.mock'

describe('EditUserProfileCell', () => {
  it('renders Loading successfully', () => {
    expect(() => {
      render(<Loading />)
    }).not.toThrow()
  })

  it('renders Success successfully', async () => {
    expect(() => {
      render(<Success user={standard().user} id={standard().user.id} />)
    }).not.toThrow()
  })

  it('shows expected data when successful', async () => {
    render(<Success user={standard().user} id={standard().user.id} />)
    const displayName = screen.getByRole('textbox', { name: 'Display Name' })
    expect(displayName).toBeInTheDocument()
    expect(displayName).toHaveValue(standard().user.displayName)
  })
})
