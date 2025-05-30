import { render, screen } from '@redwoodjs/testing/web'

import SharedLink from './SharedLink'

describe('Link', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <SharedLink
          linkId={'42'}
          submittedById={1}
          title={'Freaking Fullstack'}
          displayName={'Linda'}
          link={'https://freakingfullstack.com'}
          handleUpvoteClick={jest.fn()}
          handleLinkDeletion={jest.fn()}
          activeUser={1}
          linkVotes={[]}
          points={5}
        />
      )
    }).not.toThrow()
  })

  it('has a title', () => {
    const title = 'Freaking Fullstack'
    render(
      <SharedLink
        linkId={'42'}
        submittedById={1}
        title={title}
        points={0}
        displayName={'Linda'}
        commentCount={0}
        link={'https://freakingfullstack.com'}
        handleUpvoteClick={jest.fn()}
        handleLinkDeletion={jest.fn()}
        activeUser={1}
        linkVotes={[]}
      />
    )
    const titleElement = screen.getByText(title)
    expect(titleElement).toBeInTheDocument()
  })

  it('has a display name for the person that submitted the link', () => {
    render(
      <SharedLink
        linkId={'42'}
        submittedById={1}
        title={'Freaking Fullstack'}
        points={0}
        displayName={'Linda'}
        commentCount={0}
        link={'https://freakingfullstack.com'}
        handleUpvoteClick={jest.fn()}
        handleLinkDeletion={jest.fn()}
        activeUser={1}
        linkVotes={[]}
      />
    )
    const displayName = screen.getByText('Linda')
    expect(displayName).toBeInTheDocument()
  })

  it('links to the original url from the title', () => {
    render(
      <SharedLink
        linkId={'42'}
        submittedById={1}
        title={'Freaking Fullstack'}
        points={0}
        displayName={'Linda'}
        commentCount={0}
        link={'https://freakingfullstack.com'}
        handleUpvoteClick={jest.fn()}
        handleLinkDeletion={jest.fn()}
        activeUser={1}
        linkVotes={[]}
      />
    )
    const title = screen.getByText('Freaking Fullstack')
    expect(title).toHaveAttribute('href', 'https://freakingfullstack.com')
  })

  it('has a comment count', () => {
    render(
      <SharedLink
        linkId={'42'}
        submittedById={1}
        title={'Freaking Fullstack'}
        points={0}
        displayName={'Linda'}
        commentCount={123}
        link={'https://freakingfullstack.com'}
        handleUpvoteClick={jest.fn()}
        handleLinkDeletion={jest.fn()}
        activeUser={1}
        linkVotes={[]}
      />
    )
    const comments = screen.getByText('123 comments')
    expect(comments).toBeInTheDocument()
  })

  it('links to the person that submitted the link', () => {
    render(
      <SharedLink
        linkId={'42'}
        submittedById={1}
        title={'ultimate test link'}
        points={0}
        displayName={'Linda'}
        commentCount={0}
        link={'https://freakingfullstack.com'}
        handleUpvoteClick={jest.fn()}
        handleLinkDeletion={jest.fn()}
        activeUser={1}
        linkVotes={[]}
      />
    )

    const userLink = screen.getByText('Linda')
    expect(userLink).toBeInTheDocument()
    expect(userLink).toHaveAttribute('href', '/user-profile/1')
  })

  it('links to an individual shared link page', () => {
    render(
      <SharedLink
        linkId={'42'}
        submittedById={1}
        title={'Freaking Fullstack'}
        displayName={'Linda'}
        points={16}
        link={'https://freakingfullstack.com'}
        commentCount={123}
        handleUpvoteClick={jest.fn()}
        handleLinkDeletion={jest.fn()}
        activeUser={1}
        linkVotes={[{ id: '100', linkId: '1', userId: 1 }]}
      />
    )

    const commentsLink = screen.getByText('123 comments')
    expect(commentsLink).toBeInTheDocument()
    expect(commentsLink).toHaveAttribute('href', '/link/42')
  })

  it('upvotes a link when the upvote button is clicked', () => {
    const handleVote = jest.fn()

    render(
      <SharedLink
        linkId={'42'}
        submittedById={1}
        title={'Freaking Fullstack'}
        displayName={'Linda'}
        points={3}
        link={'https://freakingfullstack.com'}
        handleUpvoteClick={handleVote}
        handleLinkDeletion={jest.fn()}
        activeUser={1}
        linkVotes={[]}
      />
    )

    expect(handleVote).not.toHaveBeenCalled()
    const voteUpButton = screen.getByRole('button')
    expect(voteUpButton).toBeInTheDocument()
    voteUpButton.click()
    expect(handleVote).toHaveBeenCalled()
    expect(handleVote).toHaveBeenCalledTimes(1)
  })
})
