import { render } from '@redwoodjs/testing/web'

import { Success } from './UserEmailCell'
import { standard } from './UserEmailCell.mock'

describe('UserEmailCell', () => {
  it('renders Success successfully', async () => {
    expect(() => {
      render(<Success id={42} user={standard().user} />)
    }).not.toThrow()
  })
})
