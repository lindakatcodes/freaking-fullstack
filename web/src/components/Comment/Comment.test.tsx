import { render } from '@redwoodjs/testing/web'

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
    }
    expect(() => {
      render(<Comment comment={testComment} />)
    }).not.toThrow()
  })
})
