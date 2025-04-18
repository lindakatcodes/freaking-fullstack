import { render } from '@redwoodjs/testing/web'

import { Loading, Success } from './UserEmailCell'
import { standard } from './UserEmailCell.mock'

describe('UserEmailCell', () => {
  it('renders Loading successfully', () => {
    expect(() => {
      render(<Loading />)
    }).not.toThrow()
  })

  it('renders Success successfully', async () => {
    expect(() => {
      render(<Success id={42} user={standard().user} />)
    }).not.toThrow()
  })
})
