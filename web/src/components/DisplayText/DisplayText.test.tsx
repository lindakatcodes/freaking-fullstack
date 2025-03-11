import { render } from '@redwoodjs/testing/web'

import DisplayText from './DisplayText'

describe('DisplayText', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DisplayText solidText="submit" outlineText="a link" />)
    }).not.toThrow()
  })
})
