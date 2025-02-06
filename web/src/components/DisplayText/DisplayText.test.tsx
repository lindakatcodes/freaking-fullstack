import { render, screen } from '@redwoodjs/testing/web'

import DisplayText from './DisplayText'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('DisplayText', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <DisplayText
          solidText="submit"
          outlineText="a link"
          outlineColor="black"
        />
      )
    }).not.toThrow()
  })

  it('shows the correct outline color', () => {
    render(
      <DisplayText
        solidText="submit"
        outlineText="a link"
        outlineColor="blue"
      />
    )
    expect(screen.getByText('a link')).toHaveClass('text-stroke-color-blue')
  })
})
