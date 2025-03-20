import userEvent from '@testing-library/user-event'

import { render, screen, waitFor } from '@redwoodjs/testing/web'

import Comment from './Comment'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Comment', () => {
  it('renders successfully', () => {
    const testComment = {
      body: 'a test comment',
      createdAt: '',
      id: '1',
      linkId: '42',
      author: {
        email: 'test@test.co',
      },
      commentVotes: [],
    }

    const handleClick = jest.fn()
    const activeUser = 1

    expect(() => {
      render(
        <Comment
          comment={testComment}
          handleUpvoteClick={handleClick}
          activeUser={activeUser}
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
      />
    )

    const upvoteButton = screen.getByRole('button')
    await waitFor(() => userEvent.click(upvoteButton))

    expect(handleClick).toHaveBeenCalledTimes(1)
    expect(handleClick).toHaveBeenCalled()
  })
})
