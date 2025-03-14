import { render } from '@redwoodjs/testing/web'

import LinkDetailsPage from './LinkDetailsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('LinkDetailsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LinkDetailsPage id={'1'} />)
    }).not.toThrow()
  })
})
