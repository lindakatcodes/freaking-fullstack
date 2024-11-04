import { render } from '@redwoodjs/testing/web'

import DownvoteArrow from './DownvoteArrow'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('DownvoteArrow', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DownvoteArrow />)
    }).not.toThrow()
  })
})
