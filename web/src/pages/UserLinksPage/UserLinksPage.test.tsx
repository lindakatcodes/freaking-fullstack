import { render } from '@redwoodjs/testing/web'

import UserLinksPage from './UserLinksPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('UserLinksPage', () => {
  it('renders successfully', () => {
    expect(() => {
      mockCurrentUser({ id: 1, email: 'hi@test.co' })
      render(<UserLinksPage />)
    }).not.toThrow()
  })
})
