import { render } from '@redwoodjs/testing/web'

import DisplayText from './DisplayText'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('DisplayText', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DisplayText />)
    }).not.toThrow()
  })
})
