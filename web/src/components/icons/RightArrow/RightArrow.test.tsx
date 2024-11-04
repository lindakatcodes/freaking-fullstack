import { render } from '@redwoodjs/testing/web'

import RightArrow from './RightArrow'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('RightArrow', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RightArrow />)
    }).not.toThrow()
  })
})
