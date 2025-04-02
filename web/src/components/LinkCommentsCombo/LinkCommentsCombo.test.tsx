import { render } from '@redwoodjs/testing/web'

import LinkCommentsCombo from './LinkCommentsCombo'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('LinkCommentsCombo', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LinkCommentsCombo />)
    }).not.toThrow()
  })
})
