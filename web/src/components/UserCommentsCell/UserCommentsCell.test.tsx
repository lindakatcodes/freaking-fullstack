import { render } from '@redwoodjs/testing/web'

import { Loading, Empty, Failure, Success } from './UserCommentsCell'
import { standard } from './UserCommentsCell.mock'

describe('UserCommentsCell', () => {
  it('renders Loading successfully', () => {
    expect(() => {
      render(<Loading />)
    }).not.toThrow()
  })

  it('renders Empty successfully', async () => {
    expect(() => {
      render(<Empty />)
    }).not.toThrow()
  })

  it('renders Failure successfully', async () => {
    expect(() => {
      render(<Failure id={1} error={new Error('Oh no')} />)
    }).not.toThrow()
  })

  it('renders Success successfully', async () => {
    expect(() => {
      mockCurrentUser({ id: 1, email: '' })
      render(<Success id={1} user={standard().user} />)
    }).not.toThrow()
  })
})
