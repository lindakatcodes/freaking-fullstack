import { render } from '@redwoodjs/testing/web'

import HiddenEye from './HiddenEye'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('HiddenEye', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HiddenEye />)
    }).not.toThrow()
  })
})
