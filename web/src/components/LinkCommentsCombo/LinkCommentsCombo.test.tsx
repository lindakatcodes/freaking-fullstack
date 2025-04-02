import { render } from '@redwoodjs/testing/web'

import LinkCommentsCombo from './LinkCommentsCombo'

describe('LinkCommentsCombo', () => {
  it('renders successfully', () => {
    const testArray = [
      {
        body: 'a test comment',
        createdAt: '',
        id: '1',
        linkId: '42',
        link: {
          title: 'Join the Torc platform!',
        },
        author: {
          email: 'test@test.co',
        },
        commentVotes: [],
      },
    ]

    const activeUser = 1

    expect(() => {
      render(
        <LinkCommentsCombo commentArray={testArray} currentUser={activeUser} />
      )
    }).not.toThrow()
  })
})
