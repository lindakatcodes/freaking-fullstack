import { render } from '@redwoodjs/testing/web'

import ProfileLayout from './ProfileLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ProfileLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      mockCurrentUser({ id: 1, email: 'hi@test.co' })
      render(<ProfileLayout />)
    }).not.toThrow()
  })
})
