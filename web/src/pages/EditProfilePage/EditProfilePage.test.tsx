import { render } from '@redwoodjs/testing/web'

import EditProfilePage from './EditProfilePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('EditProfilePage', () => {
  it('renders successfully', () => {
    expect(() => {
      mockCurrentUser({ id: 1 })
      render(<EditProfilePage />)
    }).not.toThrow()
  })
})
