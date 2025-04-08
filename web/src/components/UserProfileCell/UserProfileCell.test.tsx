import { render, screen } from '@redwoodjs/testing/web'

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
      render(<Success id={42} user={standard().user} />)
    }).not.toThrow()
  })

  it('Success shows the expected data', async () => {
    const expectedReceived = '6'
    const expectedGiven = '3'
    const expectedWebsite = 'https://lindakat.com'
    const expectedGithub = 'https://github.com/lindakatcodes'

    render(<Success id={42} user={standard().user} />)

    const actualReceived = screen.getByTestId('votesReceived')
    expect(actualReceived).toHaveTextContent(expectedReceived)
    const actualGiven = screen.getByTestId('votesGiven')
    expect(actualGiven).toHaveTextContent(expectedGiven)

    const actualWebsite = screen.getByText(expectedWebsite)
    expect(actualWebsite).toBeInTheDocument()

    const actualGithub = screen.queryByText(expectedGithub)
    expect(actualGithub).not.toBeInTheDocument()
  })
})
