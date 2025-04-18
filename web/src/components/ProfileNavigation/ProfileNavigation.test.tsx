import { render } from '@redwoodjs/testing/web'

import ProfileNavigation from './ProfileNavigation'

describe('ProfileNavigation', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ProfileNavigation />)
    }).not.toThrow()
  })
})
