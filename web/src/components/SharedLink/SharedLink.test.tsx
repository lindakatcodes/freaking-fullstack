import { render, screen } from '@redwoodjs/testing/web'

import SharedLink from './SharedLink'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Link', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <SharedLink
          title={''}
          points={0}
          username={''}
          commentCount={0}
          link={''}
        />
      )
    }).not.toThrow()
  })

  it('has a title', () => {
    const title = 'Freaking Fullstack'
    render(
      <SharedLink
        title={title}
        points={0}
        username={'@selfteachme'}
        commentCount={0}
        link={'https://freakingfullstack.com'}
      />
    )
    const titleElement = screen.getByText(title)
    expect(titleElement).toBeInTheDocument()
  })

  it('has 0 points by default', () => {
    render(
      <SharedLink
        title={'Freaking Fullstack'}
        username={'@selfteachme'}
        commentCount={0}
        link={'https://freakingfullstack.com'}
      />
    )
    const points = screen.getByTestId('point')
    expect(points).toHaveTextContent('0')
  })

  it.skip('has a username for the person that submitted the link', () => {})

  it.skip('links to the person that submitted the link', () => {})

  it.skip('has a comment count', () => {})

  it.skip('links to an individual shared link page', () => {})

  it.skip('links to the original url', () => {})

  it('votes up', () => {
    const handleVote = jest.fn()

    render(
      <SharedLink
        title={'Freaking Fullstack'}
        username={'@selfteachme'}
        link={'https://freakingfullstack.com'}
      />
    )

    expect(handleVote).not.toHaveBeenCalled()
    const voteUp = screen.getByText('Vote up')
    expect(voteUp).toBeInTheDocument()
    voteUp.click()
    expect(handleVote).toHaveBeenCalled()
  })
})
