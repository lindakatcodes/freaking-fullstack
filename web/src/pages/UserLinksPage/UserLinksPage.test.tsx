import { render } from '@redwoodjs/testing/web'

import UserLinksPage from './UserLinksPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('UserLinksPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UserLinksPage />)
    }).not.toThrow()
  })
})
