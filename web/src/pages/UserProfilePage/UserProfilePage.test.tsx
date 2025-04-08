import { render } from '@redwoodjs/testing/web'

import UserProfilePage from './UserProfilePage'

describe('UserProfilePage', () => {
  it('renders successfully', () => {
    mockCurrentUser({ id: 1, email: 'hi@test.co' })
    expect(() => {
      render(<UserProfilePage />)
    }).not.toThrow()
  })
})
