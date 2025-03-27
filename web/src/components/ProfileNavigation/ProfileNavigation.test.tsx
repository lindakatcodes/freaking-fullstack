import { render } from '@redwoodjs/testing/web'

import ProfileNavigation from './ProfileNavigation'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ProfileNavigation', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ProfileNavigation />)
    }).not.toThrow()
  })
})
