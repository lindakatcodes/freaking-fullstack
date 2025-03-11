import { render } from '@redwoodjs/testing/web'

import EditUserProfileForm from './EditUserProfileForm'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('EditUserProfileForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EditUserProfileForm />)
    }).not.toThrow()
  })
})
