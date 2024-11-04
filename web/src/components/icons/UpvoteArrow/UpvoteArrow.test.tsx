import { render } from '@redwoodjs/testing/web'

import UpvoteArrow from './UpvoteArrow'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('UpvoteArrow', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UpvoteArrow />)
    }).not.toThrow()
  })
})
