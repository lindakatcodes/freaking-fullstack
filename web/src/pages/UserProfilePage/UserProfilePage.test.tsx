import { render } from '@redwoodjs/testing/web'

import UserProfilePage from './UserProfilePage'

describe('UserProfilePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UserProfilePage />)
    }).not.toThrow()
  })
})
