import { render } from '@redwoodjs/testing/web'

import UserCommentsPage from './UserCommentsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('UserCommentsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      mockCurrentUser({ id: 1, email: 'hi@test.co' })
      render(<UserCommentsPage />)
    }).not.toThrow()
  })
})
