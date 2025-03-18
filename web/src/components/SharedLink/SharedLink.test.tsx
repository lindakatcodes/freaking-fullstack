import { render, screen } from '@redwoodjs/testing/web'

import SharedLink from './SharedLink'

describe('Link', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <SharedLink
          linkId={'42'}
          title={'Freaking Fullstack'}
          displayName={'Linda'}
          link={'https://freakingfullstack.com'}
        />
      )
    }).not.toThrow()
  })

  it('has a title', () => {
    const title = 'Freaking Fullstack'
    render(
      <SharedLink
        linkId={'42'}
        title={title}
        points={0}
        displayName={'Linda'}
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
        linkId={'42'}
        title={'Freaking Fullstack'}
        displayName={'Linda'}
        commentCount={0}
        link={'https://freakingfullstack.com'}
      />
    )
    const points = screen.getByTestId('point')
    expect(points).toHaveTextContent('0')
  })

  it('has a display name for the person that submitted the link', () => {
    render(
      <SharedLink
        linkId={'42'}
        title={'Freaking Fullstack'}
        points={0}
        displayName={'Linda'}
        commentCount={0}
        link={'https://freakingfullstack.com'}
      />
    )
    const displayName = screen.getByText('Linda')
    expect(displayName).toBeInTheDocument()
  })

  it('links to the original url from the title', () => {
    render(
      <SharedLink
        linkId={'42'}
        title={'Freaking Fullstack'}
        points={0}
        displayName={'Linda'}
        commentCount={0}
        link={'https://freakingfullstack.com'}
      />
    )
    const title = screen.getByText('Freaking Fullstack')
    expect(title).toHaveAttribute('href', 'https://freakingfullstack.com')
  })

  it('has a comment count', () => {
    render(
      <SharedLink
        linkId={'42'}
        title={'Freaking Fullstack'}
        points={0}
        displayName={'Linda'}
        commentCount={123}
        link={'https://freakingfullstack.com'}
      />
    )
    const comments = screen.getByText('123 comments')
    expect(comments).toBeInTheDocument()
  })

  it.skip('links to the person that submitted the link', () => {})

  it.skip('links to an individual shared link page', () => {})

  it.skip('votes up', () => {
    const handleVote = jest.fn()

    render(
      <SharedLink
        linkId={'42'}
        title={'Freaking Fullstack'}
        displayName={'Linda'}
        link={'https://freakingfullstack.com'}
      />
    )

    expect(handleVote).not.toHaveBeenCalled()
    const voteUp = screen.getByRole('button')
    expect(voteUp).toBeInTheDocument()
    voteUp.click()
    expect(handleVote).toHaveBeenCalled()
  })
})
