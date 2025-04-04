import { render } from '@redwoodjs/testing/web'

import { Loading, Failure, Success } from './UserProfileCell'
import { standard } from './UserProfileCell.mock'

describe('UserProfileCell', () => {
  it('renders Loading successfully', () => {
    expect(() => {
      render(<Loading />)
    }).not.toThrow()
  })

  it('renders Failure successfully', async () => {
    expect(() => {
      render(<Failure id={42} error={new Error('Oh no')} />)
    }).not.toThrow()
  })

  it('renders Success successfully', async () => {
    expect(() => {
      render(<Success id={42} user={standard().userProfile} />)
    }).not.toThrow()
  })
})
