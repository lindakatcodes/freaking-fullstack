import userEvent from '@testing-library/user-event'

import { render, screen, waitFor } from '@redwoodjs/testing/web'

import Comment from './Comment'

describe('Comment', () => {
  it('renders successfully', () => {
    const testComment = {
      body: 'a test comment',
      createdAt: '',
      id: '1',
      linkId: '42',
      authorId: 1,
      author: {
        email: 'test@test.co',
      },
      commentVotes: [],
    }

    const activeUser = 1

    expect(() => {
      render(
        <Comment
          comment={testComment}
          handleUpvoteClick={jest.fn()}
          activeUser={activeUser}
          handleCommentDeletion={jest.fn()}
        />
      )
    }).not.toThrow()
  })

  it('calls the handler when the upvote arrow is clicked', async () => {
    const testComment = {
      body: 'a test comment',
      createdAt: '',
      id: '1',
      linkId: '42',
      authorId: 2,
      author: {
        email: 'test@test.co',
      },
      commentVotes: [],
    }

    const handleClick = jest.fn()
    const activeUser = 1

    render(
      <Comment
        comment={testComment}
        handleUpvoteClick={handleClick}
        activeUser={activeUser}
        handleCommentDeletion={jest.fn()}
      />
    )

    const upvoteButton = screen.getByRole('button')
    await waitFor(() => userEvent.click(upvoteButton))

    expect(handleClick).toHaveBeenCalledTimes(1)
    expect(handleClick).toHaveBeenCalled()
  })
})
