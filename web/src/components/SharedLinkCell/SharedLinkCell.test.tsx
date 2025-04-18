import { render } from '@redwoodjs/testing/web'

import { Loading, Empty, Failure, Success } from './SharedLinkCell'
import { standard } from './SharedLinkCell.mock'

describe('SharedLinkCell', () => {
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
      render(<Failure id={'42'} error={new Error('Oh no')} />)
    }).not.toThrow()
  })

  it('renders Success successfully', async () => {
    expect(() => {
      render(<Success id={'42'} sharedLink={standard().sharedLink} />)
    }).not.toThrow()
  })
})
